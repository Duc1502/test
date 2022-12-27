var mangso = ['khong', 'mot', 'hai', 'ba', 'bon', 'nam', 'sau', 'bay', 'tam', 'chin'];
function dochangchuc(so, daydu) {
    var chuoi = "";
    chuc = Math.floor(so / 10);
    donvi = so % 10;
    if (chuc > 1) {
        chuoi = " " + mangso[chuc] + " muoi";
        if (donvi == 1) {
            chuoi += " mot";
        } 
    } else if (chuc == 1) {
        chuoi = " muoi";
        if (donvi == 1) {
            chuoi += " mot";
        }
    } else if (daydu && donvi > 0) {
        chuoi = " linh";
    }
    if (donvi == 5 && chuc > 1) {
        chuoi += " nam";
    }
    if (donvi > 1 || (donvi == 1 && chuc == 0)) {
        chuoi += " " + mangso[donvi];
    }
    return chuoi;
}
function docblock(so, daydu) {
    var chuoi = "";
    tram = Math.floor(so / 100);
    so = so % 100;
    if (daydu || tram > 0) {
        chuoi = " " + mangso[tram] + " tram";
        chuoi += dochangchuc(so, true);
    } else {
        chuoi = dochangchuc(so, false);
    }
    return chuoi;
}
function dochangtrieu(so, daydu) {
    var chuoi = "";
    trieu = Math.floor(so / 1000000);
    so = so % 1000000;
    if (trieu > 0) {
        chuoi = docblock(trieu, daydu) + " trieu";
        daydu = true;
    }
    nghin = Math.floor(so / 1000);
    so = so % 1000;
    if (nghin > 0) {
        chuoi += docblock(nghin, daydu) + " nghin";
        daydu = true;
    }
    if (so > 0) {
        chuoi += docblock(so, daydu);
    }
    return chuoi;
}
function numberToString(so) {
    if (so == 0) return mangso[0];
   const num = so;
    var chuoi = "", hauto = "";
    do {
        ty = so % 1000000000;
        so = Math.floor(so / 1000000000);
        if (so > 0) {
            chuoi = dochangtrieu(ty, true) + hauto + chuoi;
        } else {
            chuoi = dochangtrieu(ty, false) + hauto + chuoi;
        }
        hauto = " ty";
    } while (so > 0);
    if (num > 20) {
        if(chuoi.includes('linh bon')) chuoi = chuoi.replace('linh bon',"linh tu")
        if(chuoi.includes('muoi bon')) chuoi = chuoi.replace('muoi bon',"muoi tu")
      }
    return chuoi;
}
console.log(numberToString(123456789))

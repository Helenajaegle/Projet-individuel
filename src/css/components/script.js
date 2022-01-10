function carrouselprojetindi() {
    let images155 = document.querySelectorAll('.image155');
    let d = 2000;
    let delta = 1000;

    images155.forEach(function(img,indice) {
        img.style.zIndex = - indice;
    });

    let anim155 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim155.add({
        targets: images155,
        translateX: [{value: '375px', duration: d},
                     {value: '-375px', duration: 0, delay: function(img,ind) { 
                        if (ind == 0) return (11*delta)+(10*d);
                        if (ind == 1) return (10*delta)+(9*d);
                        if (ind == 2) return (9*delta)+(8*d);
                        if (ind == 3) return (8*delta)+(7*d);
                        if (ind == 4) return (7*delta)+(6*d);
                        if (ind == 5) return (6*delta)+(5*d);
                        if (ind == 6) return (5*delta)+(4*d);
                        if (ind == 7) return (4*delta)+(3*d);
                        if (ind == 8) return (3*delta)+(2*d);
                        if (ind == 9) return (2*delta)+d;
                        if (ind == 10) return delta;
                        return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 9) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            if (ind == 4) return (5*delta)+(4*d);
            if (ind == 5) return (6*delta)+(5*d);
            if (ind == 6) return (7*delta)+(6*d);
            if (ind == 7) return (8*delta)+(7*d);
            if (ind == 8) return (9*delta)+(8*d);
            if (ind == 9) return (10*delta)+(9*d);
            if (ind == 10) return (11*delta)+(10*d);
            return (6*delta)+(5*d);
        }
    });
}

function carrouselfrise() {
    let images155 = document.querySelectorAll('.image155');
    let d = 2000;
    let delta = 1000;

    images155.forEach(function(img,indice) {
        img.style.zIndex = - indice;
    });

    let anim155 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim155.add({
        targets: images155,
        translateX: [{value: '375px', duration: d},
                     {value: '-375px', duration: 0, delay: function(img,ind) { 
                        if (ind == 0) return (8*delta)+(4*d);
                        if (ind == 1) return (7*delta)+(3*d);
                        if (ind == 2) return (6*delta)+(2*d);
                        if (ind == 6) return (2*delta)+d;
                        if (ind == 7) return delta;
                        return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 3) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            if (ind == 4) return (5*delta)+(4*d);
            return (3*delta)+(2*d);
        }
    });
}

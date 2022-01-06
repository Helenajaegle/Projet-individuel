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
                        if (ind == 0) return (5*delta)+(4*d);
                        if (ind == 1) return (4*delta)+(3*d);
                        if (ind == 2) return (3*delta)+(2*d);
                        if (ind == 3) return (2*delta)+(1*d);
                        if (ind == 4) return (1*delta)+d;
                        if (ind == 5) return delta;
                        return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 4) return 0;
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
            return (6*delta)+(5*d);
        }
    });
}

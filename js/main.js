(function(){

    const address_search = document.getElementById('address_search');
    let button_dep = document.querySelectorAll('.button_dep');

    button_dep.forEach(function(k){
        k.addEventListener('click', function(){
            button_dep.forEach(function(j){
                j.classList.remove('active');
            })
            this.classList.add('active');
            if(this.id == 'compra'){
                address_search.classList.remove('vende');
                address_search.classList.remove('alquila');
                address_search.classList.remove('explora');
                address_search.classList.add('compra');
            }else if(this.id == 'vende'){
                address_search.classList.remove('compra');
                address_search.classList.remove('alquila');
                address_search.classList.remove('explora');
                address_search.classList.add('vende');
            }else if(this.id == 'alquila'){
                address_search.classList.remove('vende');
                address_search.classList.remove('compra');
                address_search.classList.remove('explora');
                address_search.classList.add('alquila');
            }else if(this.id == 'explora'){
                address_search.classList.remove('vende');
                address_search.classList.remove('alquila');
                address_search.classList.remove('compra');
                address_search.classList.add('explora');
            }
        });
    })









    let radios = document.querySelectorAll('.label_radio > input[type=radio]')
    
    radios.forEach(function(k){
        k.addEventListener('click', function(){
            if(this.checked){
                radios.forEach(function(l){
                    l.parentNode.classList.remove('active');                    
                })
                this.parentNode.classList.add('active');
            }
        })
    })









    
    var slider = document.getElementById("area");
    var output = document.getElementById("area_v");

    var slider_2 = document.getElementById("antiguedad");
    var output_2 = document.getElementById("anti_v");

    if(output && slider){
        output.innerHTML = slider.value + 'm2';

        slider.oninput = function() {
        output.innerHTML = this.value + 'm2';
        }
    }
    if(output_2 && slider_2){
        output_2.innerHTML = slider_2.value + ' años';
    
        slider_2.oninput = function() {
        output_2.innerHTML = this.value + ' años';
        }
        slider_2.addEventListener('change', function(){
            document.body.classList.add('active');
        })
    }
    

})()
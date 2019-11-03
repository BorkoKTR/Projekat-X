var pamfleti = [
    { naslov: 'Najbrži revolveraš pobedjuje', linkPDF: 'Pamflet (1).pdf', plakat: '1.jpg' }, 
    { naslov: 'Linija za Takson', linkPDF: 'Pamflet (2).pdf', plakat:'2.jpg' },
    { naslov: 'Div', linkPDF: 'Pamflet (3).pdf', plakat:'3.jpg' },
    { naslov: 'Avanture Toma Sojera', linkPDF: 'Pamflet (4).pdf', plakat:'4.jpg' },
    { naslov: 'Najveća pretstava na svetu', linkPDF: 'Pamflet (5).pdf', plakat:'5.jpg' },
    { naslov: 'Tarzanova borba za život', linkPDF: 'Pamflet (6).pdf', plakat:'6.jpg' },
    { naslov: 'Darbi O`Gil', linkPDF: 'Pamflet (7).pdf', plakat:'7.jpg' },
    { naslov: 'Grand Hotel', linkPDF: 'Pamflet (8).pdf', plakat:'8.jpg' },
    { naslov: 'Dalje od Diabla', linkPDF: 'Pamflet (9).pdf', plakat:'9.jpg' },
    { naslov: 'Pustolovine Arsena Lupena', linkPDF: 'Pamflet (10).pdf', plakat:'10.jpg' },
    { naslov: 'Tarzan i njegova drugarica', linkPDF: 'Pamflet (11).pdf', plakat:'11.jpg' },
    { naslov: 'Bitka u klancu', linkPDF: 'Pamflet (12).pdf', plakat:'12.jpg' },
    { naslov: 'Žena na brodu', linkPDF: 'Pamflet (13).pdf', plakat:'13.jpg' },
    { naslov: 'Taras Buljba', linkPDF: 'Pamflet (14).pdf', plakat:'14.jpg' },
    { naslov: 'Žongler', linkPDF: 'Pamflet (15).pdf', plakat:'15.jpg' },
    { naslov: 'Stalag 17', linkPDF: 'Pamflet (16).pdf', plakat:'16.jpg' },
    { naslov: 'Otelo', linkPDF: 'Pamflet (17).pdf', plakat:'17.jpg' },
    { naslov: 'Reka bez povratka', linkPDF: 'Pamflet (18).pdf', plakat:'18.jpg' },
    { naslov: 'Obračun na Atlantiku', linkPDF: 'Pamflet (19).pdf', plakat:'19.jpg' },
    { naslov: 'Slatki život', linkPDF: 'Pamflet (20).pdf', plakat:'20.jpg' },
    { naslov: 'Rimljanka', linkPDF: 'Pamflet (21).pdf', plakat:'21.jpg' },
    { naslov: 'Ponosni buntovnik', linkPDF: 'Pamflet (22).pdf', plakat:'22.jpg' },
    { naslov: 'Majmunska posla', linkPDF: 'Pamflet (23).pdf', plakat:'23.jpg' },
    { naslov: 'Osvetnik iz Dallasa', linkPDF: 'Pamflet (24).pdf', plakat:'24.jpg' },
    { naslov: 'Do poslednjeg', linkPDF: 'Pamflet (25).pdf', plakat:'25.jpg' },
    { naslov: 'Pjesme zlatnog zapada', linkPDF: 'Pamflet (26).pdf', plakat:'26.jpg' },
    { naslov: 'Volim Melvina', linkPDF: 'Pamflet (27).pdf', plakat:'27.jpg' },
    { naslov: 'Rikard Lavljeg Srca', linkPDF: 'Pamflet (28).pdf', plakat:'28.jpg' },
    { naslov: 'Anđeo ili demon', linkPDF: 'Pamflet (29).pdf', plakat:'29.jpg' },
    { naslov: 'Borba u svemiru', linkPDF: 'Pamflet (30).pdf', plakat:'30.jpg' },
    { naslov: 'Berlinska priča', linkPDF: 'Pamflet (31).pdf', plakat:'31.jpg' },
    { naslov: 'Blago kalife', linkPDF: 'Pamflet (32).pdf', plakat:'32.jpg' },
    { naslov: 'Metalna zvezda', linkPDF: 'Pamflet (33).pdf', plakat:'33.jpg' },
    { naslov: 'Žig prošlosti', linkPDF: 'Pamflet (34).pdf', plakat:'34.jpg' },
    { naslov: 'Pakao ispod ništice', linkPDF: 'Pamflet (35).pdf', plakat:'35.jpg' },
    { naslov: 'Krijumčari', linkPDF: 'Pamflet (36).pdf', plakat:'36.jpg' },
    { naslov: 'Časovi očaja', linkPDF: 'Pamflet (37).pdf', plakat:'37.jpg' },
    { naslov: 'Časovi očaja', linkPDF: 'Pamflet (38).pdf', plakat:'38.jpg' },
    { naslov: 'Časovi očaja', linkPDF: 'Pamflet (39).pdf', plakat:'39.jpg' },
    { naslov: 'Časovi očaja', linkPDF: 'Pamflet (40).pdf', plakat:'40.jpg' },
];
var brojac = 0;
$(document).ready(function() {
    $("#preth").hide();
    let brojac1 = 0;
    let brojac2 = 0;
    let brojac3 = 0;

    

    $('#galerija1 a').each(function () {   
        var $this = $(this);
        var hrefPDF = "pdf_files\\" + pamfleti[brojac1].linkPDF;
        $this.attr('href', hrefPDF);
        brojac1 += 1;
    })
    $('#galerija1 img').each(function () {
        var $this = $(this);
        var  slika ="images\\" + pamfleti[brojac2].plakat;
        $this.attr('src', slika);
        brojac2 += 1;
    })
    $('#galerija1 h5').each(function () { 
        var $this = $(this);
        var tekstNaslova = pamfleti[brojac3].naslov;
        $this.text(tekstNaslova);
        brojac3 += 1;
    })
});

$("#preth").click(function(){
    if (brojac > 29) {$("#sled").show()}
    brojac = brojac - 10;
    let brojac1 = brojac;
    let brojac2 = brojac;
    let brojac3 = brojac;

        $('#galerija1 a').each(function () {
        
            var $this = $(this);
            var hrefPDF = "pdf_files\\" + pamfleti[brojac1].linkPDF;
            $this.attr('href', hrefPDF);
            brojac1 += 1;
        })
        $('#galerija1 img').each(function () {
            
            var $this = $(this);
            var  slika ="images\\" + pamfleti[brojac2].plakat;
            $this.attr('src', slika);
            brojac2 += 1;
        })
        $('#galerija1 h5').each(function () {
            
            var $this = $(this);
            var tekstNaslova = pamfleti[brojac3].naslov;
            $this.text(tekstNaslova);
            brojac3 += 1;
        })
        if (brojac < 10) {$("#preth").hide()}
      });

      $("#sled").click(function(){
        if (brojac < 10) {$("#preth").show()}
        brojac = brojac + 10;
        let brojac1 = brojac;
        let brojac2 = brojac;
        let brojac3 = brojac;
        
        $('#galerija1 a').each(function () {
        
            var $this = $(this);
            var hrefPDF = "pdf_files\\" + pamfleti[brojac1].linkPDF;
            $this.attr('href', hrefPDF);
            brojac1 += 1;
        })
        $('#galerija1 img').each(function () {
            
            var $this = $(this);
            var  slika ="images\\" + pamfleti[brojac2].plakat;
            $this.attr('src', slika);
            brojac2 += 1;
        })
        $('#galerija1 h5').each(function () {
            
            var $this = $(this);
            var tekstNaslova = pamfleti[brojac3].naslov;
            $this.text(tekstNaslova);
            brojac3 += 1;
        })
        if (brojac >29) {$("#sled").hide()}
        
    });


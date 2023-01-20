/*
Nama Templat: VIDOE - Templat HTML Situs Web Streaming Video
Penulis: Askbootstrap
Penulis URI: https://themeforest.net/user/askbootstrap
Versi: 1.0
*/
( fungsi ( $ )  {
    "gunakan ketat" ;  // Mulai penggunaan ketat
  
    // Alihkan navigasi samping
     $ ( dokumen ) . pada ( 'klik' ,  '#sidebarToggle' ,  fungsi ( e )  {  
      e . preventDefault ( ) ;
      $ ( "tubuh" ) . toggleClass ( "sidebar-toggled" ) ;
      $ ( ".sidebar" ) . toggleClass ( "toggle" ) ;
    } ) ;
  
    // Cegah pembungkus konten agar tidak bergulir saat navigasi sisi tetap melayang
    $ ( 'body.fixed-nav .sidebar' ) . aktif ( 'roda mouse DOMMouseScroll' ,  function ( e )  {
      if  ( $ window .width ( ) > 768 ) {   
        var  e0  =  e . acara asli ,
          delta  =  e0 . wheelDelta  ||  -e0 . _ rinci ;
        ini . scrollTop  +=  ( delta  <  0 ? 1 : - 1 )  *  30 ;
        e . preventDefault ( ) ;
      }
    } ) ;
    
    // Korsel Burung Hantu Kategori
    var  objowlcarousel  =  $ ( ".owl-carousel-category" ) ;
    if  ( objowlcarousel .panjang > 0 ) { _   
       objowlcarousel . burung hantuKorsel ( {
          barang : 8 ,
          beban malas : benar ,
          paginasi : salah ,
          lingkaran : benar ,
          putar otomatis : 2000 ,
          navigasi : benar ,
          stopOnHover : benar ,
          navigationText : [ "<i class='fa fa-chevron-left'></i>" ,  "<i class='fa fa-chevron-right'></i>" ]
      } ) ;
    }
  
    // Masuk Korsel Burung Hantu
    var  mainslider  =  $ ( ".owl-carousel-login" ) ;
    if  ( mainslider .panjang > 0 ) { _   
        mainslider . burung hantuKorsel ( {
            barang : 1 ,
            beban malas : benar ,
            paginasi : benar ,
            Putar Otomatis : 4000 ,
           lingkaran : benar ,
          singleItem : benar ,
            navigasi : salah ,
            stopOnHover : benar ,
          navigationText : [ "<i class='mdi mdi-chevron-left'></i>" ,  "<i class='mdi mdi-chevron-right'></i>" ]
        } ) ;
    }
      
    // keterangan alat
    $ ( '[data-toggle="tooltip"]' ) . keterangan alat ( )
  
    // Gulir ke atas tombol muncul
    $ ( dokumen ) . pada ( 'gulir' ,  fungsi ( )  {
      var  scrollDistance  =  $ ( ini ) . scrollTop ( ) ;
      if  ( scrollDistance  >  100 )  {
        $ ( '.scroll-to-top' ) . fadeIn ( ) ;
      }  lain  {
        $ ( '.scroll-to-top' ) . memudar ( ) ;
      }
    } ) ;
  
    // Pengguliran halus menggunakan pelonggaran jQuery
    $ ( dokumen ) . pada ( 'klik' ,  'a.scroll-to-top' ,  function ( event )  {
      var  $jangkar  =  $ ( ini ) ;
      $ ( 'html, badan' ) . berhenti ( ) . menghidupkan ( {
        scrollTop : ( $ ( $ anchor .attr ( ' href ' ) ) .offset ( ) .top )
      } ,  1000 ,  'easeInOutExpo' ) ;
      acara . preventDefault ( ) ;
    } ) ;
  
  } ) ( jQuery ) ;  // Akhir penggunaan ketat
  

1
2
3
4
5
6
7
8
document.querySelector(".body .main_wrapper").style.display = "none";
document.querySelector(".body").classList.add("spinner-1");
 
// Mimic Server Request
setTimeout(() => {
  document.querySelector(".body").classList.remove("spinner-1");
  document.querySelector(".body .main_wrapper").style.display = "block";
<<<<<<< HEAD
}, 3000);


/* Spinner
@keyframes spin{
    0%{
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}


css

 */
@keyframes disapeareness {
  0%{
    top: 0;
  }

  80%{
    top: 0;
  }

  100%{
    animation-timing-function: cubic-bezier(.71,.07,.83,.67);
    top: -100%;
  }
}
/*
@keyframes space_spin{
    0%{
        scale: 1;
    }
    100% {
        scale: 0;
        display: none;
    }
}
/* Spinner
.loader_spinner {
  font-size:88px;
  color:red;
  font-size:88px;
  color:rgb(142, 255, 127);
  font-size:88px;
  color:aqua;
  font-size:88px;
  color:chartreuse;
}*/
.space_spinner{
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255,0.9);
  position: absolute;
  display: grid;
  place-items: center center;
      &{
          animation: space_spin 3000ms ease-in-out;
              > .spinner{
                  animation: spin infinite 3000ms ease-in-out;
              }
      }
   
}

.spinner{
  width: 50px;
  height: 50px;
  border: 10px dashed $color-one;
  border-left-color: $color-two;
  border-bottom-color: transparent;
  border-right-color: $color-lighttwo ;
  border-radius: 100%;
}
 
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/
=======
}, 3000);
>>>>>>> a965b551e405aaa9e58f24b2483cc26764940598

(function(){
  'use strict';
  document.addEventListener('DOMContentLoaded', function(){

    // Login page: show confirmation after arriving from the sign-up page
    var msg=document.querySelector('#signupMessage');
    if(msg && /[?&]registered=1/.test(location.search)){
      msg.textContent='Account created successfully. Sign in below to open your dashboard.';
      msg.classList.add('show');
    }

    // Additional sign-in options (demo: continue straight to the dashboard)
    document.querySelectorAll('[data-auth-provider]').forEach(function(btn){
      btn.addEventListener('click', function(){
        btn.classList.add('is-loading');
        btn.setAttribute('aria-busy','true');
        setTimeout(function(){ window.location.href='../dashboard/index.html'; }, 450);
      });
    });

    // Login form
    document.querySelectorAll('[data-auth-dashboard]').forEach(function(form){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        if (!form.checkValidity()) { form.reportValidity(); return; }
        window.location.href='../dashboard/index.html';
      });
    });

    // Sign-up form with confirm-password check
    var signup=document.querySelector('#signupForm');
    if(signup){
      var pw=document.querySelector('#signupPassword');
      var confirm=document.querySelector('#signupConfirm');
      var err=document.querySelector('#signupConfirmError');
      var touched=false;
      function checkMatch(){
        var mismatch=confirm.value!=='' && pw.value!==confirm.value;
        confirm.setCustomValidity(mismatch?'Passwords do not match.':'');
        var show=touched && mismatch;
        confirm.classList.toggle('is-invalid',show);
        confirm.setAttribute('aria-invalid',show?'true':'false');
        if(err){ err.textContent=show?'Passwords do not match.':''; err.classList.toggle('show',show); }
        return !mismatch;
      }
      confirm.addEventListener('input',checkMatch);
      confirm.addEventListener('blur',function(){ touched=true; checkMatch(); });
      pw.addEventListener('input',function(){ if(touched) checkMatch(); });

      signup.addEventListener('submit',function(e){
        e.preventDefault();
        touched=true;
        checkMatch();
        if(!signup.checkValidity()){signup.reportValidity();return;}
        window.location.href='login.html?registered=1';
      });
    }

    var admin=document.querySelector('#adminForm');
    if(admin){
      admin.addEventListener('submit',function(e){
        e.preventDefault();
        if(!admin.checkValidity()){admin.reportValidity();return;}
        window.location.href='../dashboard/index.html?role=admin';
      });
    }
  });
})();

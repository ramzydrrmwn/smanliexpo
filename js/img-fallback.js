/* =========================================================
   img-fallback.js
   Dipakai lewat atribut onerror="ecsImgFallback(this)" pada tiap <img>
   di dalam .photo-frame. Kalau file foto belum ada / salah nama,
   otomatis tampil kotak placeholder rapi berisi label nama file
   yang seharusnya, jadi tampilan tetap enak dilihat sebelum foto
   asli dimasukkan.
   ========================================================= */

function ecsImgFallback(imgEl){
  const frame = imgEl.closest('.photo-frame');
  if (!frame) return;
  frame.classList.add('is-empty');
}

window.ecsImgFallback = ecsImgFallback;

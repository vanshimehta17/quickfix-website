function go(id, btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  const map={p1:0,p2:1,p3:2,p4:3,p5:4};
  document.querySelectorAll('.pnav-btn').forEach((b,i)=>
    b.classList.toggle('active',i===map[id])
  );
}
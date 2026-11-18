const $=id=>document.getElementById(id);
const BULAN=["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"];
const tplSel=$("tpl");
Object.entries(TEMPLATES).forEach(([k,v])=>tplSel.add(new Option(v.nama,k)));
tplSel.onchange=renderFields;
function renderFields(){
  const t=TEMPLATES[tplSel.value];
  $("fields").innerHTML=t.fields.map(f=>`<label>${f.label}</label><input id="f_${f.id}" placeholder="${f.ph||""}">`).join("");
}
renderFields();
const today=new Date();$("tarikh").value=today.toISOString().slice(0,10);
// persist the user's own details locally (this device only)
const KEEP=["nama","id","tel","prog","alamat","slogan"];
try{KEEP.forEach(k=>{const v=localStorage.getItem("sr_"+k);if(v)$(k).value=v})}catch(e){}
function fill(s,d){return s.replace(/\{\{(\w+)\}\}/g,(_,k)=>d[k]||"[ "+k+" ]")}
function fmtDate(v){const d=new Date(v+"T00:00:00");return `${d.getDate()} ${BULAN[d.getMonth()]} ${d.getFullYear()}`}
function gen(){
  const t=TEMPLATES[tplSel.value];
  const d={nama:$("nama").value.trim().toUpperCase(),id:$("id").value.trim(),prog:$("prog").value.trim()};
  t.fields.forEach(f=>d[f.id]=$("f_"+f.id).value.trim());
  try{KEEP.forEach(k=>localStorage.setItem("sr_"+k,$(k).value))}catch(e){}
  const L=[];
  // 1 Alamat pengirim + tarikh
  L.push(d.nama||"[ nama ]");
  if($("alamat").value.trim())L.push($("alamat").value.trim());
  if($("tel").value.trim())L.push("Tel: "+$("tel").value.trim());
  L.push("",fmtDate($("tarikh").value),"");
  // 2 Penerima
  const rt=$("rTitle").value.trim(),rn=$("rNama").value.trim();
  [ (rt+" "+rn).trim(), $("rJawatan").value.trim(), $("rInst").value.trim(), $("rAlamat").value.trim() ].filter(Boolean).forEach(x=>L.push(x));
  L.push("");
  // 3 Salam
  L.push((rt&&/^(tuan|puan)$/i.test(rt)?rt:"Tuan/Puan")+",","");
  // 4 Per:
  L.push("PER: "+fill(t.per,d).toUpperCase(),"");
  // 5 Isi (perenggan pertama tanpa nombor)
  t.isi.forEach((p,i)=>{L.push((i?i+". ":"")+fill(p,d),"")});
  // 6 Penutup
  L.push("Sekian, terima kasih.","");
  if($("slogan").value.trim())L.push($("slogan").value.trim(),"");
  L.push("Yang benar,","","","...............................","("+(d.nama||"[ NAMA ]")+")");
  if(d.id)L.push("ID Pelajar: "+d.id);
  if(d.prog)L.push(d.prog);
  $("out").textContent=L.join("\n");
  $("out").scrollIntoView({behavior:"smooth"});
}
function copyIt(){navigator.clipboard.writeText($("out").textContent).then(()=>alert("Disalin / Copied"))}

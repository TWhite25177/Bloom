const items=[
["Remember","Recall, retrieve, and/or recognize previously learned information."],
["Understand","Construct meaning from relevant knowledge. Explain concepts."],
["Apply","Apply knowledge to new situations. Use procedures."],
["Analyze","Break down ideas/materials into parts, determine relationships, and find support for generalizations."],
["Evaluate","Make judgments based on criteria. Checking and critiquing."],
["Create","Put elements together to form a coherent or functional whole; reorganize elements into a new pattern or structure."]
];
const shuffle=a=>[...a].sort(()=>Math.random()-.5);

function build(){
 const defs=shuffle(items.map(i=>i[1]));
 const area=document.getElementById("activity");
 area.innerHTML="";
 items.forEach(([term])=>{
   const card=document.createElement("div");
   card.className="card";
   let opts='<option value="">Select a definition...</option>';
   defs.forEach(d=>opts+=`<option>${d}</option>`);
   card.innerHTML=`<label>${term}</label><select>${opts}</select>`;
   area.appendChild(card);
 });
}
build();
document.getElementById("shuffle").onclick=build;
document.getElementById("clear").onclick=()=>document.querySelectorAll("select").forEach(s=>s.selectedIndex=0);


function orientar(){
  const tipo=document.getElementById('tipoAt')?.value||'';
  const dif=document.getElementById('difAt')?.value||'';
  const foco=document.getElementById('focoAt')?.value||'foco no especificado';
  let cls='yellow',txt='';
  if(dif.includes('Alerta')){cls='red';txt='🔴 Escalar: realizar evaluación clínica/social, activar coordinación del equipo, gestión de caso o atención domiciliaria según corresponda.'}
  else if(dif.includes('registro')){cls='green';txt='📝 Registrar: deja claro problema, objetivo, actividad, responsable, barrera/facilitador y seguimiento.'}
  else if(dif.includes('importancia')){txt='🟡 Conversar antes de acordar: explorar sentido, valores, prioridades y razones propias para el cambio.'}
  else if(dif.includes('confianza')||dif.includes('factibilidad')){txt='🟡 Ajustar: reducir carga, simplificar acción, definir apoyo y seguimiento cercano.'}
  else if(dif.includes('comprensión')){txt='🟡 Verificar comprensión: usar lenguaje simple, pedir explicación con sus palabras y registrar duda/resolución.'}
  else if(dif.includes('Inasistencia')){txt='🟡 Revisar barreras: no asumir abandono; coordinar rescate, ajuste de modalidad o apoyo SOME/equipo.'}
  else{txt='🟡 Explorar barreras específicas y convertir el acuerdo en una acción más pequeña y posible.'}
  const out=document.getElementById('orientacion');
  if(out){out.className='result '+cls;out.innerText=`Atención: ${tipo}\nFoco: ${foco}\nDificultad: ${dif}\nOrientación: ${txt}`;out.classList.remove('hidden');}
}
function generarPlan(){
  const g=id=>document.getElementById(id)?.value||'[completar]';
  const txt=`Plan de cuidado consensuado:\nProblema priorizado: ${g('pProblema')}\nObjetivo acordado: ${g('pObjetivo')}\nActividad concreta: ${g('pActividad')}\nResponsable/seguimiento: ${g('pSeguimiento')}\nSe acuerda revisar avances, barreras y necesidad de ajuste en el próximo contacto.`;
  const out=document.getElementById('planOut'); if(out){out.innerText=txt;out.classList.remove('hidden');}
}
function calcRisk(){
  const n=[...document.querySelectorAll('.risk')].filter(x=>x.checked).length,out=document.getElementById('riskOut');
  let cls='green',txt='🟢 No requiere gestión de caso por ahora: mantener cuidado habitual y continuidad del plan.';
  if(n>=2){cls='yellow';txt='🟡 Considerar gestión de caso: revisar con equipo, definir foco, responsable y seguimiento.'}
  if(n>=4){cls='red';txt='🔴 Activar gestión de caso: requiere coordinación activa, seguimiento y actualización del plan.'}
  if(out){out.className='result '+cls;out.innerText=`Criterios marcados: ${n}. ${txt}`;out.classList.remove('hidden');}
}
function escalaOut(){
  const e=document.getElementById('escala'); if(!e) return;
  const v=e.value,out=document.getElementById('escalaTxt');
  let cls='red',txt=`${v}/10: baja importancia/confianza. Conviene conversar más antes de acordar.`;
  if(v>=4&&v<=7){cls='yellow';txt=`${v}/10: hay base para avanzar, pero conviene ajustar el acuerdo y preguntar qué ayudaría a subir un punto.`}
  if(v>=8){cls='green';txt=`${v}/10: importante y posible. Concretar acción, responsable y seguimiento.`}
  out.className='result '+cls;out.innerText=txt;
}
document.addEventListener('DOMContentLoaded',()=>{
  escalaOut();
  const search=document.getElementById('search');
  if(search){
    search.addEventListener('input',()=>{
      const t=search.value.trim().toLowerCase();
      document.querySelectorAll('.block').forEach(b=>{
        b.classList.toggle('hidden', t && !b.innerText.toLowerCase().includes(t));
      });
    });
  }
});

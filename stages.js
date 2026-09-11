(() => {
  const stages = [
    ['Foundation','Фундамент','Основата пренася натоварванията от сградата към терена. Подготовката, армировката и бетонирането се изпълняват по конструктивния проект, с предвидени отвори и трасета за инсталациите.'],
    ['Structure','Дървена конструкция','Изгражда се носещият скелет от дървени елементи. Стените, гредите и връзките оформят пространствата и осигуряват устойчивостта на сградата според проекта.'],
    ['Roof Lining','Покривна обшивка','Върху покривната конструкция се оформя основата за следващите слоеве. Обшивката и защитните мембрани се съгласуват с избраната покривна система.'],
    ['Gutters','Улуци','Улуците събират водата от покривните скатове. Уточняват се местата на оттичане, закрепването и връзките към водосточните тръби.'],
    ['Roof Cover','Покривно покритие','Полага се крайното покривно покритие и се оформят билата, стрехите и детайлите около преминаванията. Целта е завършена защита на покрива от атмосферните условия.'],
    ['Chimney','Комин','Коминът се изпълнява според отоплителното решение и проекта. Особено внимание се отделя на безопасните отстояния и детайлите при преминаване през подове и покрив.'],
    ['Joinery Measurements','Размери за дограмата','Проверяват се реалните размери и нивата на отворите за прозорци и външни врати. Тези данни се използват за производството и планирането на монтажа.'],
    ['Screed Level','Ниво на замазката','Определя се проектната височина на подовата замазка спрямо крайния под. Съобразяват се настилките, праговете, вратите и предвидените подови инсталации.'],
    ['Joinery Install','Монтаж на дограмата','Дограмата се поставя, нивелира и закрепва в подготвените отвори. Монтажните фуги се уплътняват и се проверява работата на отваряемите части.'],
    ['Door Order','Поръчка на врати','Избират се моделите, размерите и посоките на отваряне. Поръчката се съгласува с бъдещите подови нива и готовите размери на стенните отвори.'],
    ['Electrical','Електроинсталация','Изпълняват се трасетата и окабеляването по електрическия проект. Разположението на осветлението, контактите и уредите се уточнява преди затваряне на стените.'],
    ['Plumbing','ВиК инсталация','Полагат се водопроводните и канализационните трасета. Връзките и изводите се проверяват, преди да бъдат закрити от облицовките и подовете.'],
    ['Insulation','Изолация','Поставят се изолационните слоеве, предвидени за стените, покрива и подовете. Непрекъснатостта на изолацията и правилното изпълнение на фугите са част от детайла.'],
    ['Drywall','Гипсокартон','Монтират се плоскостите върху подготвената конструкция. Оставят се нужните отвори за инсталации и достъп, а фугите се подготвят за довършване.'],
    ['Filler','Запълване на фуги','Фугите, крепежните точки и локалните неравности се обработват с подходяща система. Подготвя се равна основа за следващите довършителни слоеве.'],
    ['Screed','Подова замазка','Изпълнява се замазката до зададеното ниво. Следват необходимото време за съхнене и проверка на основата преди полагане на избраната настилка.'],
    ['Electrical Brackets','Монтажни кутии и стойки','Позиционират се кутиите и монтажните елементи за електрическите устройства. Дълбочината и нивата им се съгласуват с готовата повърхност на стената.'],
    ['Plaster','Мазилка','Обработват се предвидените в проекта повърхности с избраната мазилкова система. Основата, съвместимостта на материалите и съхненето определят следващите стъпки.'],
    ['Downpipes','Водосточни тръби','Водосточните тръби отвеждат водата от улуците към предвиденото отводняване. Монтират се закрепванията и се проверяват връзките и посоката на оттичане.'],
    ['Tiles','Плочки','Подготвя се основата и се уточнява разпределението на плочките. В мокрите помещения се изпълняват проектните хидроизолационни детайли преди облицовката.'],
    ['Paint','Боядисване','Повърхностите се подготвят и грундират според системата. Нанасят се избраните цветове и покрития с необходимите интервали за съхнене.'],
    ['Laminate','Ламиниран паркет','Проверяват се равнинността и влажността на основата. Полагат се подходящата подложка и настилката, като се спазват указанията за фуги и преходи.'],
    ['Switches & Sockets','Ключове и контакти','Монтират се крайните електрически устройства върху готовите повърхности. Свързването и проверките се извършват от квалифициран специалист.'],
    ['Lightning Protection','Мълниезащита','Изпълняват се предвидените в проекта приемни, отвеждащи и заземителни елементи. Системата подлежи на необходимите проверки и измервания.'],
    ['Doors','Монтаж на врати','Монтират се касите, крилата и обковът. Проверяват се отварянето, затварянето и връзките с готовите настилки и стени.'],
    ['Skirting Boards','Подови первази','Первазите оформят връзката между настилката и стената. Завършват се ъглите, съединенията и преходите около вратите.'],
    ['Completion','Завършване и предаване','Преглежда се изпълнението на договорения обхват и се уточняват оставащите корекции. Подготвят се приложимите документи и указания за експлоатация и поддръжка.']
  ];
  const section=document.querySelector('#stage-explorer'),cloud=document.querySelector('#stage-cloud'),list=document.querySelector('#stage-list');
  const dialog=document.querySelector('#stage-dialog'),toggle=document.querySelector('#stage-view');
  let current=0,origin=null,listMode=matchMedia('(prefers-reduced-motion: reduce)').matches,onScreen=false,yaw=0,pitch=0,last=0;
  let drag=null,dragMoved=false,suppressTagClick=false;
  const tags=[];
  stages.forEach((stage,index)=>{
    const create=()=>{const button=document.createElement('button');button.type='button';button.innerHTML=`<span>${String(index+1).padStart(2,'0')}</span>${stage[1]}`;button.setAttribute('aria-haspopup','dialog');button.addEventListener('click',()=>{if(suppressTagClick)return;openStage(index,button)});return button};
    const tag=create();tag.className='sphere-tag';tag.dataset.stageIndex=String(index);cloud.append(tag);tags.push(tag);
    const item=create();item.className='stage-list-item';list.append(item);
  });
  function renderStage(){const stage=stages[current];document.querySelector('#stage-number').textContent=`ЕТАП ${String(current+1).padStart(2,'0')} / 27`;document.querySelector('#stage-title').textContent=stage[1];document.querySelector('#stage-subtitle').textContent='';document.querySelector('#stage-description').textContent=stage[2];const img=document.querySelector('#stage-illustration');img.src=`assets/stage-photos/stage-${String(current+1).padStart(2,'0')}.jpg`;img.alt=`Работа по етап: ${stage[1]}`;document.querySelector('#stage-back').disabled=current===0;document.querySelector('#stage-forward').disabled=current===26}
  function openStage(index,button){current=index;origin=button;renderStage();dialog.showModal();document.body.classList.add('stage-modal-open')}
  document.querySelector('#stage-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
  dialog.addEventListener('close',()=>{document.body.classList.remove('stage-modal-open');origin?.focus()});
  document.querySelector('#stage-back').addEventListener('click',()=>{if(current>0){current--;renderStage()}});
  document.querySelector('#stage-forward').addEventListener('click',()=>{if(current<26){current++;renderStage()}});
  function setView(){cloud.hidden=listMode;list.hidden=!listMode;toggle.textContent=listMode?'Виж сферата':'Виж като списък';toggle.setAttribute('aria-pressed',String(listMode))}
  toggle.addEventListener('click',()=>{listMode=!listMode;setView()});setView();
  cloud.addEventListener('pointerdown',event=>{
    if(listMode||event.button&&event.button!==0)return;
    const selectedTag=event.target.closest?.('.sphere-tag');
    drag={id:event.pointerId,x:event.clientX,y:event.clientY,yaw,pitch,tagIndex:selectedTag?Number(selectedTag.dataset.stageIndex):null};dragMoved=false;
    cloud.setPointerCapture?.(event.pointerId);
  });
  cloud.addEventListener('pointermove',event=>{
    if(!drag||drag.id!==event.pointerId)return;
    const dx=event.clientX-drag.x,dy=event.clientY-drag.y;
    if(Math.hypot(dx,dy)>7&&!dragMoved){
      dragMoved=true;cloud.classList.add('is-dragging');
    }
    if(!dragMoved)return;
    yaw=drag.yaw+dx*.012;pitch=Math.max(-1.18,Math.min(1.18,drag.pitch+dy*.012));
    event.preventDefault();
  });
  function endDrag(event){
    if(!drag||event.pointerId!==drag.id)return;
    const selectedIndex=drag.tagIndex;
    cloud.releasePointerCapture?.(event.pointerId);cloud.classList.remove('is-dragging');
    if(dragMoved){suppressTagClick=true;setTimeout(()=>suppressTagClick=false,0)}
    else if(Number.isInteger(selectedIndex)){
      suppressTagClick=true;openStage(selectedIndex,tags[selectedIndex]);setTimeout(()=>suppressTagClick=false,0);
    }
    drag=null;
  }
  cloud.addEventListener('pointerup',endDrag);cloud.addEventListener('pointercancel',endDrag);
  const reduce=matchMedia('(prefers-reduced-motion: reduce)');reduce.addEventListener('change',()=>{if(reduce.matches){listMode=true;setView()}});
  new IntersectionObserver(entries=>{onScreen=entries[0].isIntersecting},{rootMargin:'100px'}).observe(section);
  function draw(time){const dt=Math.min(40,time-last||16);last=time;if(onScreen&&!listMode&&!drag&&!dialog.open&&!reduce.matches&&!document.hidden)yaw+=dt*.00013;
    if(onScreen&&!listMode){const width=cloud.clientWidth,height=cloud.clientHeight;const rx=Math.max(40,(width-180)/2),ry=(height-65)/2;const cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch);tags.forEach((tag,index)=>{const baseY=1-2*(index+.5)/27,r=Math.sqrt(1-baseY*baseY),phi=index*2.399963;const baseX=r*Math.cos(phi),baseZ=r*Math.sin(phi);const x=baseX*cy+baseZ*sy,zYaw=-baseX*sy+baseZ*cy;const y=baseY*cp-zYaw*sp,z=baseY*sp+zYaw*cp;const depth=(z+1)/2;const scale=.73+depth*.27;tag.style.transform=`translate(-50%,-50%) translate(${x*rx}px,${y*ry}px) scale(${scale})`;tag.style.opacity=String(.56+depth*.44);tag.style.zIndex=String(Math.round(depth*100));tag.style.filter=`brightness(${.87+depth*.13})`})}
    requestAnimationFrame(draw)
  }requestAnimationFrame(draw);
})();

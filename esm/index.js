
export default (elementOrList,popupElement,popupCallback)=> {
  const castArray=a=>Array.isArray(a)?a:[a];
  const getRect=(refRect, popupRect)=>{
    const w=document.body.clientWidth;
    const middle=refRect.x+refRect.width/2;
    let left=middle-popupRect.width/2;
    left=left<0?0:left+popupRect.width>w?w-popupRect.width:left;
    return {
      left:left,
      bottom:refRect.height
    }
  };
  const popups=el=> {
    el.addEventListener('mousemove',e=>{
      popupCallback(e.target, popupElement);
      popupElement.style.display='block';
      const r=getRect(e.target.getBoundingClientRect(),popupElement.getBoundingClientRect());
      popupElement.style.bottom=r.bottom+'px';
      popupElement.style.left=r.left+'px';
    });
    el.addEventListener('mouseout',e=>{
      popupElement.style.display='none';
    });
  };
  Object.entries({position:'fixed',display:'none'}).forEach(([k,v])=>popupElement.style[k]=v);
  castArray(elementOrList).forEach(popups);
  popupElement.addEventListener('mousemove',e=>{
    popupElement.style.display='block';
  });
  popupElement.addEventListener('mouseout',e=>{
    popupElement.style.display='none';
  });
};
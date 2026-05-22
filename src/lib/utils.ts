export const genRequestId=()=>{const s=new Date().toISOString().replaceAll('-','').replaceAll(':','').replace('T','').replace('Z','').replace('.','');return `REQ-${s.slice(0,14)}`};
export const copyText=async(t:string)=>navigator.clipboard.writeText(t);

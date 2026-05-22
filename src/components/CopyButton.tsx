import { copyText } from '../lib/utils';export default ({text,label='نسخ'}:{text:string;label?:string})=><button className='btn' onClick={()=>copyText(text)}>{label}</button>

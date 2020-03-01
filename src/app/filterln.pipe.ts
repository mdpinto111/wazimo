import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filterln'
})
export class FilterlnPipe implements PipeTransform {
  transform(items: any[], fn: string, ln: string, mail: string, gender: string, ip_address: string): any[] {
    if(!items) return [];
    if(!fn && !ln && !mail && !gender && !ip_address) return items;
fn = fn.toLowerCase();
ip_address = ip_address.toLowerCase();
ln = ln.toLowerCase();
mail = mail.toLowerCase();
gender = gender.toLowerCase();
return items.filter( it => {
      return (it.first_name.toLowerCase().includes(fn) && it.last_name.toLowerCase().includes(ln) && it.email.toLowerCase().includes(mail) && it.gender.toLowerCase().includes(gender) && it.ip_address.toLowerCase().includes(ip_address)) ;
    });
   }
}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { analyzeAndValidateNgModules, CompileShallowModuleMetadata } from '@angular/compiler';

const DAY_MS = 60 * 60 * 24 * 1000;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Example';
  days: any = [];
  giorni_del_mese: any = [];
  primo_giorno_mese = new Date;
  progetti: any = [] ;
  orari: any = [] ;
  righe: any = [];

  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/progetti.json").subscribe(data1 =>{this.progetti = data1.progetti})
    this.httpClient.get("assets/test1.json").subscribe(data =>{
    this.days = data["giorni"];
    this.giorni_del_mese = this.getMonthDays(this.primo_giorno_mese);
    this.progetti.forEach(p => {        
      let riga: { progetto: { codice: any; descrizione: string[]; }; giorno: any; orario: any; }[] = [];
      this.giorni_del_mese.forEach((giorno_del_mese: any) => {
        let trovato = false;
        this.days.forEach((giorno: { giorno: any; }) => {
          giorno.giorno = Number(giorno.giorno);
          if(giorno.giorno === giorno_del_mese){
            giorno.progetti.forEach((progetto: {progetto: any;}) => {
            trovato = true;
              if(p["codice progetto"] === progetto["codice progetto"])
                riga.push({giorno: giorno.giorno, orario: progetto.orario});
            })
          }
        });
        if (!trovato){
          riga.push({giorno: giorno_del_mese, orario: null})
        }
    });
      this.righe.push({progetto: {codice: p["codice progetto"], descrizione: p["descrizione progetto"]},orari: riga});
    });
    console.log(this.days);    
    
    
    console.log(this.primo_giorno_mese.getDate())
    console.log(this.getCalendarStartDay())
    /*console.log(this.getCalendarDays(this.primo_giorno_mese))*/
    console.log(this.giorni_del_mese)
    console.log(this.progetti)
    console.log(this.righe)

  })

}
  getCalendarStartDay(date = new Date) {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    const firstDayOfMonth = new Date(year, month, 1).getTime();
    return this.range(1,7)
      .map(num => new Date(firstDayOfMonth - DAY_MS * num))
      .find(dt => dt.getDay() === 1)
  }
  getCalendarDays(date = new Date) {
    const calendarStartTime =  this.getCalendarStartDay(date).getTime();

    return this.range(0, 41)
      .map(num => new Date(calendarStartTime + DAY_MS * num));
  }
  getMonthDays(date = new Date) {
    const [year, month] = [date.getFullYear(), date.getMonth()];
    const firstDayOfMonth = new Date(year, month, 1).getTime();
    const lastDayOfMonth = new Date(year, month+1, 0).getTime();
    const numberOfDayOfMonth = new Date(year, month+1, 0).getDate();
    return this.range(0, numberOfDayOfMonth - 1)
      .map(num => new Date(firstDayOfMonth + DAY_MS * num).getDate());
  }

  private range(start: number, end: number, length = end - start + 1) {
    return Array.from({ length }, (_, i) => start + i)
  }
}


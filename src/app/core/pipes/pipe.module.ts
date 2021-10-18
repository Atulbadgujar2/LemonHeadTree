import { NgModule } from '@angular/core';
import { DateTimeFormatterPipe } from './datetimeformatter.pipe';
import { CurrencyFormattorPipe } from './currencyformatter.pipe';
import { CountryFormatterPipe } from './countryformatter.pipe';

@NgModule({
    imports: [],
    declarations: [DateTimeFormatterPipe, 
        CurrencyFormattorPipe,
        CountryFormatterPipe],
    exports: [DateTimeFormatterPipe,
        CurrencyFormattorPipe, 
        CountryFormatterPipe,]
})
export class PipeModule {

    static forRoot() {
        return {
            ngModule: PipeModule,
            providers: [],
        };
    }
}

import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@ngneat/transloco";
import { HttpClient } from "@angular/common/http";
import * as path from 'path';
import * as fs from 'fs';
import { from, Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        if (import.meta.env.SSR) {
            // globalThis.$fetch is available during pre-rendering, but doesn't resolve the data for Angular
            if ((globalThis as any).$fetch) {
                // const __dirname = path.dirname(new URL(import.meta.url).pathname);
                // return new Promise<Translation>((resolve) => {
                //     const langJson = fs.readFileSync(path.join(__dirname, `./assets/i18n/${lang}.json`), 'utf-8');
                //     const res = JSON.parse(langJson);
                //     resolve(res);
                // });
                return from(globalThis.$fetch(`/assets/i18n/${lang}.json`).then(console.log)) as Observable<any>;
            }
        }

        return this.http.get<Translation>(`${import.meta.env.VITE_ANALOG_PUBLIC_BASE_URL}/assets/i18n/${lang}.json`);
    }
}

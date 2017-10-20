import {Pipe, PipeTransform} from '@angular/core';
import {markdown} from 'markdown';

@Pipe({
    name: 'markdown'
})
export class MarkdownPipe implements PipeTransform {

    public transform(value: string): HTMLElement {
        return markdown.toHTML(value);
    }
}

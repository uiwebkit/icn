import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/close/filled.svg';

@Component({
  tag: 'uni-mat-f-close',
  styles: 'uni-mat-f-close {display: inherit}'
})
export class UniMatFCloseComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}

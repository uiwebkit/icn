import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/rotate-right/filled.svg';

@Component({ tag: 'uni-mat-f-rotate-right' })
export class UniMatFRotateRightComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}

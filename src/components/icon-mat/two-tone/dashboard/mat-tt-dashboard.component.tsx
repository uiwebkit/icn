import { Component, ComponentInterface, Element } from '@stencil/core';

import svg from '../../../../assets/svg/mat/dasboard/two-tone.svg';

@Component({ tag: 'uni-mat-tt-dashboard' })
export class UniMatTtDashboardComponent implements ComponentInterface {

  @Element() el!: HTMLElement;

  componentWillLoad(): Promise<void> | void {
    this.el.innerHTML = svg;
  }
}

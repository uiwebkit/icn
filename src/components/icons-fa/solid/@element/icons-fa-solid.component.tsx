import { Component, ComponentInterface, h, VNode, Prop } from '@stencil/core';

import { UniColor, UniSize } from '../../../../models';
import { uniSmartWrap } from '../../../../utils';

@Component({
  tag: 'uni-icons-fas',
  styleUrl: '../styles/icons-fa-solid.css',
})
export class UniIconsFaSolidComponent implements ComponentInterface {

  @Prop({ reflect: true }) name!: string;

  @Prop({ reflect: true }) color: UniColor;

  @Prop({ reflect: true }) size: UniSize | number;

  @Prop({ reflect: true }) rotate: boolean = false;

  @Prop({ reflect: true }) degree: number;

  @Prop({ reflect: true }) speed: number;

  @Prop({ reflect: true }) steps: number;

  render(): VNode {
    const { color, rotate, degree, speed, steps } = this;
    const props = { color, fontSize: this.size, rotate, degree, speed, steps, selector: `.fa-${this.name}` };

    return uniSmartWrap(props, <span class={`fas fa-${this.name}`} />);
  }
}

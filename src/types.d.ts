import type {
  IPlugin, PluginOptions, TextAlign, Padding,
} from 'cal-heatmap';

export type ComputedOptions = {
  radius: number;
  width: number;
  height: number;
  gutter: number;
  textAlign: TextAlign;
};

export interface ExtraLabelOptions extends PluginOptions,
  Partial<ComputedOptions> {
  enabled: boolean;
  text: () => string[];
  padding: Padding;
}

export interface IExtraLabel extends IPlugin {
}

export default class ExtraLabel {
  static readonly VERSION: string;

  calendar: CalHeatmap;

  options: PluginOptions;

  root: any;

  setup: (options?: PluginOptions) => void;

  paint: () => Promise<unknown>;

  destroy: () => Promise<unknown>;
}

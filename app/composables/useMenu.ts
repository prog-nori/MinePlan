import LineByAngle from '~/components/Svg/LineByAngle.vue';
import StraightLine from '~/components/Svg/StraightLine.vue';
import SCurve from '~/components/Svg/SCurve.vue';
import TextToDots from '~/components/Svg/TextToDots.vue';
import RandomPattern from '~/components/Svg/RandomPattern.vue';
import ExcelConverter from '~/components/Svg/ExcelConverter.vue';

export const useMenu = (): {
  href: string;
  label: {
    en: string;
    ja: string;
  };
  iconFile?: string;
  svg?: any;
  disabled?: boolean;
}[] => {
  return [
    {
      href: '/tools/angle-line',
      label: { en: 'Line by Angle', ja: '角度から斜線作成' },
      svg: LineByAngle,
      disabled: true,
    },
    {
      href: '/tools/straight-line',
      label: { en: 'Straight Line', ja: '2点間の直線' },
      svg: StraightLine,
      disabled: true,
    },
    {
      href: '/tools/s-curve',
      label: { en: 'S-Curve', ja: '2点間のS字カーブ' },
      svg: SCurve,
      disabled: true,
    },
    {
      href: '/tools/text-to-dots',
      label: { en: 'Text to Dots', ja: '文字をドットで表現' },
      svg: TextToDots,
      disabled: true,
    },
    {
      href: '/tools/random-pattern',
      label: { en: 'Random Pattern', ja: 'ランダム模様を作成' },
      svg: RandomPattern,
      disabled: true,
    },
    {
      href: '/tools/excel-column',
      label: { en: 'Excel Column Converter', ja: 'Excel列 → 数字変換' },
      svg: ExcelConverter,
    },
  ];
};

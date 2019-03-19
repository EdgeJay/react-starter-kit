import ava from 'ava';
import { convertToGridTemplateLines, IGridLine } from './Grid';

ava('convertToGridTemplateLines should convert array of IGridLine into string', t => {
  const gridLine: IGridLine = {
    name: 'first',
    width: '5rem',
  };
  t.is(convertToGridTemplateLines([gridLine]), '[first] 5rem');
});

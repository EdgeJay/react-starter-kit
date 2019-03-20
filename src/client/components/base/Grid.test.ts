import ava from 'ava';
import { convertToGridTemplateLines } from './Grid';

ava('convertToGridTemplateLines should convert array of IGridLine into string', t => {
  t.is(
    convertToGridTemplateLines([
      {
        name: 'first',
        size: '5rem',
      },
    ]),
    '[first] 5rem'
  );

  t.is(
    convertToGridTemplateLines([
      {
        name: 'second',
        size: '15rem',
      },
      {
        name: 'third',
        size: '10px',
      },
    ]),
    '[second] 15rem [third] 10px'
  );
});

ava(
  'convertToGridTemplateLines should convert array of IGridLine into string, with optional size',
  t => {
    t.is(
      convertToGridTemplateLines([
        {
          name: 'second',
          size: '15rem',
        },
        {
          name: 'third',
          size: 'auto',
        },
        {
          name: 'end',
        },
      ]),
      '[second] 15rem [third] auto [end]'
    );
  }
);

ava('convertToGridTemplateLines should allow multiple names separated by space', t => {
  t.is(
    convertToGridTemplateLines([
      {
        name: 'row1-end row2-start',
        size: '15rem',
      },
      {
        name: 'row2-end',
        size: 'auto',
      },
      {
        name: 'end',
      },
    ]),
    '[row1-end row2-start] 15rem [row2-end] auto [end]'
  );
});

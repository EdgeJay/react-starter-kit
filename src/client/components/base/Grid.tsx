import styledComponents from 'styled-components';

interface IGridLine {
  name: string;
  width: string;
}

function convertToGridTemplateLines(gridLines: IGridLine[]): string {
  return gridLines.reduce((acc, val): string => `${acc} [${val.name}] ${val.width}`, '').trim();
}

const GridContainer = styledComponents.div`
  display: grid;
`;

export { convertToGridTemplateLines, IGridLine, GridContainer };

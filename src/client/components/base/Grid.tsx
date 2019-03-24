import styled from 'styled-components';

interface IGridLine {
  name: string;
  size?: string;
}

interface IGridContainerProps {
  columns: IGridLine[];
  rows: IGridLine[];
}

interface IGridArea {
  rowStart: string;
  columnStart: string;
  rowEnd: string;
  columnEnd: string;
}

interface IGridItemProps {
  area: IGridArea;
}

function convertToGridTemplateLines(gridLines: IGridLine[]): string {
  return gridLines
    .reduce((acc, val): string => `${acc} [${val.name}]${val.size ? ` ${val.size}` : ''}`, '')
    .trim();
}

const GridContainer = styled.div<IGridContainerProps>`
  display: grid;
  grid-template-columns: ${({ columns }) => convertToGridTemplateLines(columns)};
  grid-template-rows: ${({ rows }) => convertToGridTemplateLines(rows)};
  height: 100%;
`;

const GridItem = styled.div<IGridItemProps>`
  grid-area: ${({ area }) =>
    `${area.rowStart} / ${area.columnStart} / ${area.rowEnd} / ${area.columnEnd}`};
`;

export { convertToGridTemplateLines, IGridLine, IGridArea, GridContainer, GridItem };

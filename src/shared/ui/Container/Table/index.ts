import { Table as TableComp } from './Table';
import { THead } from './components/THead';
import { TBody } from './components/TBody';
import { TFoot } from './components/TFoot';
import { TRow } from './components/TRow';
import { THeader } from './components/THeader';
import { TData } from './components/TData';

type TableType = typeof TableComp & {
  Head: typeof THead;
  Body: typeof TBody;
  Foot: typeof TFoot;
  Row: typeof TRow;
  Header: typeof THeader;
  Data: typeof TData;
};

const Table = TableComp as TableType;

Table.Head = THead;
Table.Body = TBody;
Table.Foot = TFoot;
Table.Row = TRow;
Table.Header = THeader;
Table.Data = TData;

export { Table };

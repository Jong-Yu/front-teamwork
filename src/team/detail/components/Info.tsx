import { TeamDto } from '../../../_query/team/model/TeamDto';
import { Card } from '../../../_shared/ui/Card/Card';

interface InfoProps {
  team?: TeamDto;
}

export const Info = ({ team }: InfoProps) => {
  return <Card>{team?.desc}</Card>;
};

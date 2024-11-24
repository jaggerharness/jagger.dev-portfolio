import { Timeline, TimelineEntry } from '@/app/components/timeline';

export default function ExperienceSection({ data }: { data: TimelineEntry[] }) {
  return <Timeline data={data} />;
}

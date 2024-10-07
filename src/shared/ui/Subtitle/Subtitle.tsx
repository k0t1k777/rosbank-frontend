import 'src/shared/ui/Subtitle/Subtitle.scss';

interface SubtitleProps {
  text: string;
}

export default function Subtitle({ text }: SubtitleProps) {
  return <h2 className='subtitle'>{text}</h2>;
}

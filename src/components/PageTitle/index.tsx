interface IProps {
  title: string;
  subtitle?: string;
}

export function PageTitle({ title, subtitle }: IProps) {
  return (
    <hgroup>
      <h1 className="text-5xl">{title}</h1>
      {subtitle && <p className="text-2xl">{subtitle}</p>}
    </hgroup>
  );
}

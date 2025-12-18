interface InvitePageProps {
  params: Promise<{
    alias: string;
  }>;
}

export default async function InvitePage(props: InvitePageProps) {
  const params = await props.params;

  return (
    <div>
      <h1>Invite</h1>
      <p>Alias: {params.alias}</p>
    </div>
  );
}

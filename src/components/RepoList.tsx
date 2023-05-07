// 'use client' -> uso quando é necessário ser renderizado no client

export async function RepoList() {
  // Modo antigo
  // const [repos, setRepos] = useState([])
  //
  // useEffect(() => {
  //   fetch('https://api.github.com/users/bzenky/repos')
  //     .then(res => res.json())
  //     .then(data => setRepos(data))
  // }, [])

  // Modo novo com cache (antigo getStaticProps)
  // const repos = await fetch('https://api.github.com/users/bzenky/repos', {
  //   cache: 'force-cache',
  //   next: {
  //     revalidate: 20,
  //   }
  // }).then(res => res.json())

  const repos = await fetch('https://api.github.com/users/bzenky/repos')
    .then(res => res.json())

  return (
    <div>
      {JSON.stringify(repos, null, 2)}
    </div>
  )
}
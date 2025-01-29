import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
  // const valenloza = { isFollowing: false, userName: 'valenloza_' } -> { ... valenloza}

  const users = [
    {
      userName: 'valenloza_',
      name: 'Valen Loza',
      isFollowing: true
    },
    {
      userName: 'JorgeAdrian101',
      name: 'Jorge Adrian',
      isFollowing: false
    },
    {
      userName: 'AlejoNra',
      name: 'Alejo Ramirez',
      isFollowing: false
    },
    {
      userName: 'agusaenz0',
      name: 'Agua',
      isFollowing: true
    }
  ]

  return (
    <section className='App'>
      {
        users.map((user) => (
          <TwitterFollowCard 
            key={user.userName}
            userName={user.userName} 
            initialIsFollowing={user.isFollowing}
          >
            {user.name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
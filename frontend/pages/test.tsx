
import type { NextPage } from 'next'
import { useFetchUsersQuery } from "../generated/graphql"

const Test: NextPage = () => {

const { data } = useFetchUsersQuery();

  return (
    <div>
        {data && data.users.map((user,i) => {
            return (
                <div key={i}>
                    <span>{user.id}</span>
                    <span>{user.name}</span>
                </div>
            )
            })}
    </div>
  )
}

export default Test
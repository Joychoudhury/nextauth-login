import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

  const { data: session } = useSession();

  return (
    <div>
      {session ?
        (
          <div className="flex justify-center items-center w-full flex-col">
            <div className="bg-white rounded-lg shadow-md p-4 mt-10">
              <h2 className="text-2xl font-semibold text-center">{session?.user?.name}</h2>
              <p className="text-gray-500 text-center">{session?.user?.email}</p>
              <p className="text-gray-500 text-center">{session?.user?.role}</p>

              <button onClick={() => signOut()}>Log out</button>
            </div>

          </div>
        ) : (
          <p className="cursor-pointer" onClick={() => router.push('/Login')}>Please sign in</p>
        )}
    </div>
  );
}

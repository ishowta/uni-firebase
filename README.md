# uni-firebase

## How to use

1. Write library side using `uni-firebase` type definitions.

```ts
// lib/src/model.ts
import { DocumentSnapshot, Firestore } from 'uni-firebase'

export const getUser = (
  firestore: Firestore,
  uid: string
): Promise<DocumentSnapshot> => {
  return firestore.collection('users').doc(uid).get()
}
```

2. Inject the corresponding type definitions in the application side.

```ts
// app/src/@types/uni-firebase.d.ts

// If this is Web app
import { FirestoreWebTypes } from 'uni-firebase'

declare module 'uni-firebase' {
  interface FirestoreInjectedTypes<T> extends FirestoreWebTypes<T> {}
}

// If this is Admin service
import { FirestoreAdminTypes } from 'uni-firebase'

declare module 'uni-firebase' {
  interface FirestoreInjectedTypes<T> extends FirestoreAdminTypes<T> {}
}

// If this is Mobile app
import { FirestoreNativeTypes } from 'uni-firebase'

declare module 'uni-firebase' {
  interface FirestoreInjectedTypes<T> extends FirestoreNativeTypes<T> {}
}
```

3. Write app

```ts
// app/src/main.ts
import { getUser } from 'lib/model'

const user = await getUser(firestore, user.uid)
console.log(user.data())
```

import type firebase from 'firebase/app';
import type adminFirestore from '@google-cloud/firestore';
import type { FirebaseFirestoreTypes as nativeFirestore } from '@react-native-firebase/firestore';

type MergedDocumentData = firebase.firestore.DocumentData &
  nativeFirestore.DocumentData &
  adminFirestore.DocumentData;

type FirestoreCommonTypes<T extends MergedDocumentData> = {
  Blob: firebase.firestore.Blob | nativeFirestore.Blob | undefined;

  // firebase admin separates CollectionReference and CollectionGroup
  CollectionGroup:
    | firebase.firestore.CollectionReference<T>
    | nativeFirestore.CollectionReference<T>
    | adminFirestore.CollectionGroup<T>;

  CollectionReference:
    | firebase.firestore.CollectionReference<T>
    | nativeFirestore.CollectionReference<T>
    | adminFirestore.CollectionReference<T>;

  DocumentChange:
    | firebase.firestore.DocumentChange<T>
    | nativeFirestore.DocumentChange<T>
    | adminFirestore.DocumentChange<T>;

  DocumentChangeType:
    | firebase.firestore.DocumentChangeType
    | nativeFirestore.DocumentChangeType
    | adminFirestore.DocumentChangeType;

  DocumentData:
    | firebase.firestore.DocumentData
    | nativeFirestore.DocumentData
    | adminFirestore.DocumentData;

  DocumentReference:
    | firebase.firestore.DocumentReference<T>
    | nativeFirestore.DocumentReference<T>
    | adminFirestore.DocumentReference<T>;

  DocumentSnapshot:
    | firebase.firestore.DocumentSnapshot<T>
    | nativeFirestore.DocumentSnapshot<T>
    | adminFirestore.DocumentSnapshot<T>;

  FieldPath:
    | firebase.firestore.FieldPath
    | nativeFirestore.FieldPath
    | adminFirestore.FieldPath;

  FieldValue:
    | firebase.firestore.FieldValue
    | nativeFirestore.FieldValue
    | adminFirestore.FieldValue;

  Firestore:
    | firebase.firestore.Firestore
    | nativeFirestore.Module
    | adminFirestore.Firestore;

  FirestoreDataConverter:
    | firebase.firestore.FirestoreDataConverter<T>
    | undefined
    | adminFirestore.FirestoreDataConverter<T>;

  GeoPoint:
    | firebase.firestore.GeoPoint
    | nativeFirestore.GeoPoint
    | adminFirestore.GeoPoint;

  GetOptions:
    | firebase.firestore.GetOptions
    | nativeFirestore.GetOptions
    | undefined;

  Query:
    | firebase.firestore.Query<T>
    | nativeFirestore.Query<T>
    | adminFirestore.Query<T>;

  QueryDocumentSnapshot:
    | firebase.firestore.QueryDocumentSnapshot<T>
    | nativeFirestore.QueryDocumentSnapshot<T>
    | adminFirestore.QueryDocumentSnapshot<T>;

  QuerySnapshot:
    | firebase.firestore.QuerySnapshot<T>
    | nativeFirestore.QuerySnapshot<T>
    | adminFirestore.QuerySnapshot<T>;

  SetOptions:
    | firebase.firestore.SetOptions
    | nativeFirestore.SetOptions
    | adminFirestore.SetOptions;

  Settings:
    | firebase.firestore.Settings
    | nativeFirestore.Settings
    | adminFirestore.Settings;

  SnapshotListenOptions:
    | firebase.firestore.SnapshotListenOptions
    | nativeFirestore.SnapshotListenOptions
    | undefined;

  Timestamp:
    | firebase.firestore.Timestamp
    | nativeFirestore.Timestamp
    | adminFirestore.Timestamp;

  Transaction:
    | firebase.firestore.Transaction
    | nativeFirestore.Transaction
    | adminFirestore.Transaction;

  UpdateData:
    | firebase.firestore.UpdateData
    | undefined
    | adminFirestore.UpdateData;

  WriteBatch:
    | firebase.firestore.WriteBatch
    | nativeFirestore.WriteBatch
    | adminFirestore.WriteBatch;
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/no-unused-vars
export interface FirestoreInjectedTypes<T> {}

export type FirestoreTypes<T extends MergedDocumentData = MergedDocumentData> =
  Record<string, never> extends FirestoreInjectedTypes<T>
    ? FirestoreCommonTypes<T>
    : FirestoreInjectedTypes<T>;

export type FirestoreWebTypes<T> = {
  Blob: firebase.firestore.Blob;
  CollectionReference: firebase.firestore.CollectionReference<T>;
  DocumentChange: firebase.firestore.DocumentChange<T>;
  DocumentChangeType: firebase.firestore.DocumentChangeType;
  DocumentData: firebase.firestore.DocumentData;
  DocumentReference: firebase.firestore.DocumentReference<T>;
  DocumentSnapshot: firebase.firestore.DocumentSnapshot<T>;
  FieldPath: firebase.firestore.FieldPath;
  FieldValue: firebase.firestore.FieldValue;
  Firestore: firebase.firestore.Firestore;
  FirestoreDataConverter: firebase.firestore.FirestoreDataConverter<T>;
  GeoPoint: firebase.firestore.GeoPoint;
  GetOptions: firebase.firestore.GetOptions;
  Query: firebase.firestore.Query<T>;
  QueryDocumentSnapshot: firebase.firestore.QueryDocumentSnapshot<T>;
  QuerySnapshot: firebase.firestore.QuerySnapshot<T>;
  SetOptions: firebase.firestore.SetOptions;
  Settings: firebase.firestore.Settings;
  SnapshotListenOptions: firebase.firestore.SnapshotListenOptions;
  Timestamp: firebase.firestore.Timestamp;
  Transaction: firebase.firestore.Transaction;
  UpdateData: firebase.firestore.UpdateData;
  WriteBatch: firebase.firestore.WriteBatch;
};

export type FirestoreNativeTypes<T extends MergedDocumentData> = {
  Blob: nativeFirestore.Blob;
  CollectionReference: nativeFirestore.CollectionReference<T>;
  DocumentChange: nativeFirestore.DocumentChange<T>;
  DocumentChangeType: nativeFirestore.DocumentChangeType;
  DocumentData: nativeFirestore.DocumentData;
  DocumentReference: nativeFirestore.DocumentReference<T>;
  DocumentSnapshot: nativeFirestore.DocumentSnapshot<T>;
  FieldPath: nativeFirestore.FieldPath;
  FieldValue: nativeFirestore.FieldValue;
  Firestore: nativeFirestore.Module;
  GeoPoint: nativeFirestore.GeoPoint;
  GetOptions: nativeFirestore.GetOptions;
  Query: nativeFirestore.Query<T>;
  QueryDocumentSnapshot: nativeFirestore.QueryDocumentSnapshot<T>;
  QuerySnapshot: nativeFirestore.QuerySnapshot<T>;
  SetOptions: nativeFirestore.SetOptions;
  Settings: nativeFirestore.Settings;
  SnapshotListenOptions: nativeFirestore.SnapshotListenOptions;
  Timestamp: nativeFirestore.Timestamp;
  Transaction: nativeFirestore.Transaction;
  WriteBatch: nativeFirestore.WriteBatch;
};

export type FirestoreAdminTypes<T extends MergedDocumentData> = {
  CollectionGroup: adminFirestore.CollectionGroup<T>;
  CollectionReference: adminFirestore.CollectionReference<T>;
  DocumentChange: adminFirestore.DocumentChange<T>;
  DocumentChangeType: adminFirestore.DocumentChangeType;
  DocumentData: adminFirestore.DocumentData;
  DocumentReference: adminFirestore.DocumentReference<T>;
  DocumentSnapshot: adminFirestore.DocumentSnapshot<T>;
  FieldPath: adminFirestore.FieldPath;
  FieldValue: adminFirestore.FieldValue;
  Firestore: adminFirestore.Firestore;
  FirestoreDataConverter: adminFirestore.FirestoreDataConverter<T>;
  GeoPoint: adminFirestore.GeoPoint;
  Query: adminFirestore.Query<T>;
  QueryDocumentSnapshot: adminFirestore.QueryDocumentSnapshot<T>;
  QuerySnapshot: adminFirestore.QuerySnapshot<T>;
  SetOptions: adminFirestore.SetOptions;
  Settings: adminFirestore.Settings;
  Timestamp: adminFirestore.Timestamp;
  Transaction: adminFirestore.Transaction;
  UpdateData: adminFirestore.UpdateData;
  WriteBatch: adminFirestore.WriteBatch;
};

export type Blob = FirestoreTypes['Blob'];
export type CollectionReference<T extends MergedDocumentData> =
  FirestoreTypes<T>['CollectionReference'];
export type DocumentChange<T extends MergedDocumentData> =
  FirestoreTypes<T>['DocumentChange'];
export type DocumentChangeType = FirestoreTypes['DocumentChangeType'];
export type DocumentData = FirestoreTypes['DocumentData'];
export type DocumentReference<T extends MergedDocumentData> =
  FirestoreTypes<T>['DocumentReference'];
export type DocumentSnapshot<T extends MergedDocumentData> =
  FirestoreTypes<T>['DocumentSnapshot'];
export type FieldPath = FirestoreTypes['FieldPath'];
export type FieldValue = FirestoreTypes['FieldValue'];
export type Firestore = FirestoreTypes['Firestore'];
export type FirestoreDataConverter<T extends MergedDocumentData> =
  FirestoreTypes<T>['FirestoreDataConverter'];
export type GeoPoint = FirestoreTypes['GeoPoint'];
export type GetOptions = FirestoreTypes['GetOptions'];
export type Query<T extends MergedDocumentData> = FirestoreTypes<T>['Query'];
export type QueryDocumentSnapshot<T extends MergedDocumentData> =
  FirestoreTypes<T>['QueryDocumentSnapshot'];
export type QuerySnapshot<T extends MergedDocumentData> =
  FirestoreTypes<T>['QuerySnapshot'];
export type SetOptions = FirestoreTypes['SetOptions'];
export type Settings = FirestoreTypes['Settings'];
export type SnapshotListenOptions = FirestoreTypes['SnapshotListenOptions'];
export type Timestamp = FirestoreTypes['Timestamp'];
export type Transaction = FirestoreTypes['Transaction'];
export type UpdateData = FirestoreTypes['UpdateData'];
export type WriteBatch = FirestoreTypes['WriteBatch'];

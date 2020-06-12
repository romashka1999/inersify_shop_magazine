import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from "typeorm";

export enum UserStatus {
    VERIFIED = "VERIFIED",
    VERIFICATION_PENDING = "VERIFICATION_PENDING",
    UNVERIFIED = "UNVERIFIED"
}

export enum UserGender {
    MALE = "MALE",
    FEMALE = "FEMALE",
    OTHER = "OTHER"
}

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'text',
        nullable: false
    })
    firstName!: string;

    @Column({
        type: 'text',
        nullable: false
    })
    lastName!: string;

    @Column({
        type: 'text',
        nullable: false
    })
    birthDate!: string;

    @Column({
        type: 'enum',
        enum: UserGender,
        default: UserGender.OTHER,
        nullable: false
    })
    gender!: UserGender;

    // @Column({
    //     type: 'text',
    //     nullable: true
    // })
    // profileImgUrl: string;

    @Column({
        type: 'text',
        nullable: false,
        unique: true
    })
    email!: string;


    @Column({
        length: 9,
        nullable: false,
        unique: true
    })
    phoneNumber!: string;


    @Column({
        type: 'enum',
        enum: UserStatus,
        default: UserStatus.VERIFIED,
        nullable: false
    })
    status!: UserStatus;

    @Column({
        type: 'text',
        nullable: false
    })
    password!: string;

    @Column({
        type: 'text',
        nullable: false
    })
    salt!: string;
}
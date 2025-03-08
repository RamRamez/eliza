export const givethEntitiesPrompt = "Project Path: entities\n" +
    "\n" +
    "Source Tree:\n" +
    "\n" +
    "```\n" +
    "entities\n" +
    "├── anchorContractAddress.ts\n" +
    "├── wallet.ts\n" +
    "├── reaction.ts\n" +
    "├── project.ts\n" +
    "├── category.ts\n" +
    "├── powerSnapshot.ts\n" +
    "├── draftDonation.ts\n" +
    "├── powerBoostingSnapshotHistory.ts\n" +
    "├── estimatedClusterMatching.ts\n" +
    "├── projectVerificationForm.ts\n" +
    "├── sybil.ts\n" +
    "├── instantPowerBalance.ts\n" +
    "├── userQfRoundModelScore.ts\n" +
    "├── entities.ts\n" +
    "├── CronJob.ts\n" +
    "├── powerBoostingSnapshot.ts\n" +
    "├── powerSnapshotHistory.ts\n" +
    "├── projectStatusReason.ts\n" +
    "├── instantPowerFetchState.ts\n" +
    "├── projectAddress.ts\n" +
    "├── powerBalanceSnapshotHistory.ts\n" +
    "├── donation.ts\n" +
    "├── projectImage.ts\n" +
    "├── Country.ts\n" +
    "├── qfRound.ts\n" +
    "├── ProjectEstimatedMatchingView.ts\n" +
    "├── campaign.ts\n" +
    "├── socialProfile.ts\n" +
    "├── powerRound.ts\n" +
    "├── projectSocialMedia.ts\n" +
    "├── projectStatusHistory.ts\n" +
    "├── powerBalanceSnapshot.ts\n" +
    "├── projectStatus.ts\n" +
    "├── broadcastNotification.ts\n" +
    "├── powerBoosting.ts\n" +
    "├── organization.ts\n" +
    "├── bankAccount.ts\n" +
    "├── draftRecurringDonation.ts\n" +
    "├── projectFraud.ts\n" +
    "├── ProjectActualMatchingView.ts\n" +
    "├── notificationPayload.ts\n" +
    "├── referredEvent.ts\n" +
    "├── qfRoundHistory.ts\n" +
    "├── token.ts\n" +
    "├── mainCategory.ts\n" +
    "├── featuredUpdate.ts\n" +
    "├── user.ts\n" +
    "├── accountVerification.ts\n" +
    "├── sitemapUrl.ts\n" +
    "├── project.test.ts\n" +
    "├── thirdPartyProjectImport.ts\n" +
    "├── ProjectGivbackRankView.ts\n" +
    "├── previousRoundRank.ts\n" +
    "└── recurringDonation.ts\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/anchorContractAddress.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "Entity,\n" +
    "Index,\n" +
    "ManyToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "Unique,\n" +
    "UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Unique(['address', 'networkId', 'project'])\n" +
    "export class AnchorContractAddress extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { default: false })\n" +
    "isActive: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "networkId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field()\n" +
    "@Column()\n" +
    "address: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field()\n" +
    "@Column()\n" +
    "txHash: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project)\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId((relatedAddress: AnchorContractAddress) => relatedAddress.project)\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "creator: User;\n" +
    "\n" +
    "@RelationId(\n" +
    "(anchorContractAddress: AnchorContractAddress) =>\n" +
    "anchorContractAddress.creator,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "creatorId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "owner: User;\n" +
    "\n" +
    "@RelationId(\n" +
    "(anchorContractAddress: AnchorContractAddress) =>\n" +
    "anchorContractAddress.owner,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "ownerId: number;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/wallet.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "ManyToOne,\n" +
    "RelationId,\n" +
    "BaseEntity,\n" +
    "} from 'typeorm';\n" +
    "import { User } from './user';\n" +
    "\n" +
    "@ObjectType()\n" +
    "@Entity()\n" +
    "export class Wallet extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text', { unique: true })\n" +
    "address: string;\n" +
    "\n" +
    "@Field(_type => User)\n" +
    "@ManyToOne(_type => User, { eager: true })\n" +
    "user: User;\n" +
    "@RelationId((donation: Wallet) => donation.user)\n" +
    "@Column()\n" +
    "userId: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/reaction.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "Entity,\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "BaseEntity,\n" +
    "RelationId,\n" +
    "ManyToOne,\n" +
    "Index,\n" +
    "} from 'typeorm';\n" +
    "import { Project, ProjectUpdate } from './project';\n" +
    "import { User } from './user';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Index(['userId', 'projectId'], { unique: true })\n" +
    "@Index(['userId', 'projectUpdateId'], { unique: true })\n" +
    "export class Reaction extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@ManyToOne(_type => ProjectUpdate)\n" +
    "projectUpdate: ProjectUpdate;\n" +
    "\n" +
    "@Index()\n" +
    "@RelationId((reaction: Reaction) => reaction.projectUpdate)\n" +
    "@Field(_type => ID, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "projectUpdateId?: number;\n" +
    "\n" +
    "// We just fill it with join when making query so dont need to Add @Column or @ManyToOne\n" +
    "user: User;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@Column()\n" +
    "userId: number;\n" +
    "\n" +
    "@Field(_type => String)\n" +
    "@Column()\n" +
    "reaction: string;\n" +
    "\n" +
    "@ManyToOne(_type => Project)\n" +
    "project: Project;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => ID, { nullable: true })\n" +
    "@RelationId((reaction: Reaction) => reaction.project)\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "}\n" +
    "export type REACTION_TYPE = 'heart';\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/project.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, Float, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "AfterInsert,\n" +
    "AfterUpdate,\n" +
    "BeforeUpdate,\n" +
    "BeforeInsert,\n" +
    "BaseEntity,\n" +
    "BeforeRemove,\n" +
    "Column,\n" +
    "Entity,\n" +
    "Index,\n" +
    "LessThan,\n" +
    "ManyToMany,\n" +
    "ManyToOne,\n" +
    "OneToMany,\n" +
    "OneToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "JoinTable,\n" +
    "} from 'typeorm';\n" +
    "\n" +
    "import { Int } from 'type-graphql/dist/scalars/aliases';\n" +
    "import { Donation } from './donation';\n" +
    "import { Reaction } from './reaction';\n" +
    "import { User } from './user';\n" +
    "import { ProjectStatus } from './projectStatus';\n" +
    "import { ProjectStatusHistory } from './projectStatusHistory';\n" +
    "import { ProjectStatusReason } from './projectStatusReason';\n" +
    "import { i18n, translationErrorMessagesKeys } from '../utils/errorMessages';\n" +
    "import { Organization } from './organization';\n" +
    "import { findUserById } from '../repositories/userRepository';\n" +
    "import { SocialProfile } from './socialProfile';\n" +
    "import { ProjectVerificationForm } from './projectVerificationForm';\n" +
    "import { ProjectAddress } from './projectAddress';\n" +
    "import { ProjectContacts } from './projectVerificationForm';\n" +
    "import { ProjectPowerView } from '../views/projectPowerView';\n" +
    "import { ProjectFuturePowerView } from '../views/projectFuturePowerView';\n" +
    "import { ProjectInstantPowerView } from '../views/projectInstantPowerView';\n" +
    "import { Category } from './category';\n" +
    "import { FeaturedUpdate } from './featuredUpdate';\n" +
    "import { getHtmlTextSummary } from '../utils/utils';\n" +
    "import { QfRound } from './qfRound';\n" +
    "import {\n" +
    "findActiveQfRound,\n" +
    "getProjectDonationsSqrtRootSum,\n" +
    "getQfRoundTotalSqrtRootSumSquared,\n" +
    "} from '../repositories/qfRoundRepository';\n" +
    "import { EstimatedMatching } from '../types/qfTypes';\n" +
    "import { Campaign } from './campaign';\n" +
    "import { ProjectEstimatedMatchingView } from './ProjectEstimatedMatchingView';\n" +
    "import { AnchorContractAddress } from './anchorContractAddress';\n" +
    "import { ProjectSocialMedia } from './projectSocialMedia';\n" +
    "import { EstimatedClusterMatching } from './estimatedClusterMatching';\n" +
    "\n" +
    "// eslint-disable-next-line @typescript-eslint/no-var-requires\n" +
    "const moment = require('moment');\n" +
    "\n" +
    "export enum ProjStatus {\n" +
    "rejected = 1,\n" +
    "pending = 2,\n" +
    "clarification = 3,\n" +
    "verification = 4,\n" +
    "active = 5,\n" +
    "deactive = 6,\n" +
    "cancelled = 7,\n" +
    "drafted = 8,\n" +
    "}\n" +
    "\n" +
    "// Always use Enums to prevent sql injection with plain strings\n" +
    "export enum SortingField {\n" +
    "MostFunded = 'MostFunded',\n" +
    "MostLiked = 'MostLiked',\n" +
    "Newest = 'Newest',\n" +
    "RecentlyUpdated = 'RecentlyUpdated',\n" +
    "Oldest = 'Oldest',\n" +
    "QualityScore = 'QualityScore',\n" +
    "GIVPower = 'GIVPower',\n" +
    "InstantBoosting = 'InstantBoosting',\n" +
    "ActiveQfRoundRaisedFunds = 'ActiveQfRoundRaisedFunds',\n" +
    "EstimatedMatching = 'EstimatedMatching',\n" +
    "BestMatch = 'BestMatch',\n" +
    "}\n" +
    "\n" +
    "export enum FilterField {\n" +
    "Verified = 'verified',\n" +
    "IsGivbackEligible = 'isGivbackEligible',\n" +
    "AcceptGiv = 'givingBlocksId',\n" +
    "AcceptFundOnGnosis = 'acceptFundOnGnosis',\n" +
    "AcceptFundOnMainnet = 'acceptFundOnMainnet',\n" +
    "AcceptFundOnPolygon = 'acceptFundOnPolygon',\n" +
    "AcceptFundOnETC = 'acceptFundOnETC',\n" +
    "AcceptFundOnCelo = 'acceptFundOnCelo',\n" +
    "AcceptFundOnArbitrum = 'acceptFundOnArbitrum',\n" +
    "AcceptFundOnBase = 'acceptFundOnBase',\n" +
    "AcceptFundOnZKEVM = 'acceptFundOnZKEVM',\n" +
    "AcceptFundOnOptimism = 'acceptFundOnOptimism',\n" +
    "AcceptFundOnSolana = 'acceptFundOnSolana',\n" +
    "AcceptFundOnStellar = 'acceptFundOnStellar',\n" +
    "Endaoment = 'fromEndaoment',\n" +
    "BoostedWithGivPower = 'boostedWithGivPower',\n" +
    "ActiveQfRound = 'ActiveQfRound',\n" +
    "}\n" +
    "\n" +
    "export enum OrderField {\n" +
    "CreationDate = 'creationDate',\n" +
    "CreationAt = 'createdAt',\n" +
    "UpdatedAt = 'updatedAt',\n" +
    "\n" +
    "// TODO We may can delete this sorting\n" +
    "Balance = 'balance',\n" +
    "\n" +
    "QualityScore = 'qualityScore',\n" +
    "Verified = 'verified',\n" +
    "Reactions = 'totalReactions',\n" +
    "Donations = 'totalDonations',\n" +
    "TraceDonations = 'totalTraceDonations',\n" +
    "AcceptGiv = 'givingBlocksId',\n" +
    "GIVPower = 'givPower',\n" +
    "InstantBoosting = 'instantBoosting',\n" +
    "}\n" +
    "\n" +
    "export enum RevokeSteps {\n" +
    "Reminder = 'reminder',\n" +
    "Warning = 'warning',\n" +
    "LastChance = 'lastChance',\n" +
    "UpForRevoking = 'upForRevoking', // exceeded last chance and revoked dates case\n" +
    "Revoked = 'revoked',\n" +
    "}\n" +
    "export enum ReviewStatus {\n" +
    "NotReviewed = 'Not Reviewed',\n" +
    "Listed = 'Listed',\n" +
    "NotListed = 'Not Listed',\n" +
    "}\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class Project extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "title: string;\n" +
    "\n" +
    "@Index({ unique: true })\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "slug?: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => [String], { nullable: true })\n" +
    "@Column('text', { array: true, default: '{}' })\n" +
    "slugHistory?: string[];\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "description?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "descriptionSummary?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "traceCampaignId?: string;\n" +
    "\n" +
    "@Index({ unique: true, where: '\"givingBlocksId\" IS NOT NULL' })\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ default: null, nullable: true })\n" +
    "givingBlocksId?: string;\n" +
    "\n" +
    "@Index({ unique: true, where: '\"changeId\" IS NOT NULL' })\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ default: null, nullable: true })\n" +
    "changeId?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ default: null, nullable: true })\n" +
    "website?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ default: null, nullable: true })\n" +
    "youtube?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "creationDate: Date;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "latestUpdateCreationDate: Date;\n" +
    "\n" +
    "@Field(_type => Organization)\n" +
    "@ManyToOne(_type => Organization)\n" +
    "@JoinTable()\n" +
    "organization: Organization;\n" +
    "\n" +
    "@RelationId((project: Project) => project.organization)\n" +
    "@Column({ nullable: true })\n" +
    "organizationId: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "coOrdinates?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "image?: string;\n" +
    "\n" +
    "@Index('trgm_idx_project_impact_location', { synchronize: false })\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "impactLocation?: string;\n" +
    "\n" +
    "@Field(_type => [Category], { nullable: true })\n" +
    "@ManyToMany(_type => Category, category => category.projects, {\n" +
    "nullable: true,\n" +
    "})\n" +
    "@JoinTable()\n" +
    "categories: Category[];\n" +
    "\n" +
    "@Field(_type => [QfRound], { nullable: true })\n" +
    "@ManyToMany(_type => QfRound, qfRound => qfRound.projects, {\n" +
    "nullable: true,\n" +
    "})\n" +
    "@JoinTable()\n" +
    "qfRounds: QfRound[];\n" +
    "\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "@Column('float', { nullable: true })\n" +
    "balance: number = 0;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "stripeAccountId?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ unique: true, nullable: true })\n" +
    "walletAddress?: string;\n" +
    "\n" +
    "@Field(_type => Boolean)\n" +
    "@Column()\n" +
    "verified: boolean;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "verificationStatus?: string | null;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column({ default: false })\n" +
    "isImported: boolean;\n" +
    "\n" +
    "@Field(_type => Boolean)\n" +
    "@Column()\n" +
    "giveBacks: boolean;\n" +
    "\n" +
    "@Field(_type => [Donation], { nullable: true })\n" +
    "@OneToMany(_type => Donation, donation => donation.project)\n" +
    "donations?: Donation[];\n" +
    "\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "qualityScore: number = 0;\n" +
    "\n" +
    "@Field(_type => [ProjectContacts], { nullable: true })\n" +
    "@Column('jsonb', { nullable: true })\n" +
    "contacts: ProjectContacts[];\n" +
    "\n" +
    "@Field(() => [Reaction], { nullable: true })\n" +
    "@OneToMany(_type => Reaction, reaction => reaction.project)\n" +
    "reactions?: Reaction[];\n" +
    "\n" +
    "@Field(_type => [ProjectAddress], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => ProjectAddress,\n" +
    "projectAddress => projectAddress.project,\n" +
    "{\n" +
    "eager: true,\n" +
    "},\n" +
    ")\n" +
    "addresses?: ProjectAddress[];\n" +
    "\n" +
    "@Field(_type => [ProjectSocialMedia], { nullable: true })\n" +
    "@OneToMany(_type => ProjectSocialMedia, socialMedia => socialMedia.project, {\n" +
    "eager: false,\n" +
    "})\n" +
    "socialMedia?: ProjectSocialMedia[];\n" +
    "\n" +
    "@Field(_type => [AnchorContractAddress], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => AnchorContractAddress,\n" +
    "anchorContractAddress => anchorContractAddress.project,\n" +
    "{\n" +
    "eager: true,\n" +
    "},\n" +
    ")\n" +
    "anchorContracts?: AnchorContractAddress[];\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => ProjectStatus)\n" +
    "@ManyToOne(_type => ProjectStatus)\n" +
    "status: ProjectStatus;\n" +
    "@RelationId((project: Project) => project.status)\n" +
    "@Column({ nullable: true })\n" +
    "statusId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@ManyToOne(() => User, { eager: true })\n" +
    "adminUser: User;\n" +
    "\n" +
    "@Column({ nullable: true })\n" +
    "@Field(_type => Int)\n" +
    "@RelationId((project: Project) => project.adminUser)\n" +
    "adminUserId: number;\n" +
    "\n" +
    "@Field(_type => [ProjectStatusHistory], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => ProjectStatusHistory,\n" +
    "projectStatusHistory => projectStatusHistory.project,\n" +
    ")\n" +
    "statusHistory?: ProjectStatusHistory[];\n" +
    "\n" +
    "@Field(_type => ProjectVerificationForm, { nullable: true })\n" +
    "@OneToOne(\n" +
    "_type => ProjectVerificationForm,\n" +
    "projectVerificationForm => projectVerificationForm.project,\n" +
    "{ nullable: true },\n" +
    ")\n" +
    "projectVerificationForm?: ProjectVerificationForm;\n" +
    "\n" +
    "@Field(_type => FeaturedUpdate, { nullable: true })\n" +
    "@OneToOne(_type => FeaturedUpdate, featuredUpdate => featuredUpdate.project, {\n" +
    "nullable: true,\n" +
    "})\n" +
    "featuredUpdate?: FeaturedUpdate;\n" +
    "\n" +
    "@Field(_type => ProjectPowerView, { nullable: true })\n" +
    "@OneToOne(\n" +
    "_type => ProjectPowerView,\n" +
    "projectPowerView => projectPowerView.project,\n" +
    ")\n" +
    "projectPower?: ProjectPowerView;\n" +
    "\n" +
    "@Field(_type => ProjectFuturePowerView, { nullable: true })\n" +
    "@OneToOne(\n" +
    "_type => ProjectFuturePowerView,\n" +
    "projectFuturePowerView => projectFuturePowerView.project,\n" +
    ")\n" +
    "projectFuturePower?: ProjectFuturePowerView;\n" +
    "\n" +
    "@Field(_type => ProjectInstantPowerView, { nullable: true })\n" +
    "@OneToOne(\n" +
    "_type => ProjectInstantPowerView,\n" +
    "projectInstantPowerView => projectInstantPowerView.project,\n" +
    ")\n" +
    "projectInstantPower?: ProjectInstantPowerView;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "verificationFormStatus?: string;\n" +
    "\n" +
    "@Field(_type => [SocialProfile], { nullable: true })\n" +
    "@OneToMany(_type => SocialProfile, socialProfile => socialProfile.project)\n" +
    "socialProfiles?: SocialProfile[];\n" +
    "\n" +
    "@Field(_type => [ProjectEstimatedMatchingView], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => ProjectEstimatedMatchingView,\n" +
    "projectEstimatedMatchingView => projectEstimatedMatchingView.project,\n" +
    ")\n" +
    "projectEstimatedMatchingView?: ProjectEstimatedMatchingView[];\n" +
    "\n" +
    "@Field(_type => Float)\n" +
    "@Column({ type: 'real' })\n" +
    "totalDonations: number;\n" +
    "\n" +
    "@Field(_type => Float)\n" +
    "@Column({ type: 'real', default: 0 })\n" +
    "totalTraceDonations: number;\n" +
    "\n" +
    "@Field(_type => Int, { defaultValue: 0 })\n" +
    "@Column({ type: 'integer', default: 0 })\n" +
    "totalReactions: number;\n" +
    "\n" +
    "@Field(_type => Int, { nullable: true })\n" +
    "@Column({ type: 'integer', nullable: true })\n" +
    "totalProjectUpdates: number;\n" +
    "\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "@Column({ type: 'float', nullable: true })\n" +
    "sumDonationValueUsdForActiveQfRound: number;\n" +
    "\n" +
    "@Field(_type => Int, { nullable: true })\n" +
    "@Column({ type: 'int', nullable: true })\n" +
    "countUniqueDonorsForActiveQfRound: number;\n" +
    "\n" +
    "@Field(_type => Int, { nullable: true })\n" +
    "@Column({ type: 'int', nullable: true })\n" +
    "countUniqueDonors: number;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column({ type: 'boolean', default: null, nullable: true })\n" +
    "listed?: boolean | null;\n" +
    "\n" +
    "// @Field(_type => Boolean, { nullable: true })\n" +
    "// @Column({ type: 'boolean', default: false })\n" +
    "// tunnableQf?: boolean;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column({ type: 'boolean', default: false })\n" +
    "isGivbackEligible: boolean;\n" +
    "\n" +
    "@Field(_type => String)\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: ReviewStatus,\n" +
    "default: ReviewStatus.NotReviewed,\n" +
    "})\n" +
    "reviewStatus: ReviewStatus;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "projectUrl?: string;\n" +
    "\n" +
    "// Virtual attribute to subquery result into\n" +
    "@Field(_type => Int, { nullable: true })\n" +
    "prevStatusId?: number;\n" +
    "\n" +
    "// Virtual attribute for projectUpdate\n" +
    "@Field(_type => ProjectUpdate, { nullable: true })\n" +
    "projectUpdate?: any;\n" +
    "\n" +
    "@Field(_type => [ProjectUpdate], { nullable: true })\n" +
    "@OneToMany(() => ProjectUpdate, projectUpdate => projectUpdate.project)\n" +
    "projectUpdates?: ProjectUpdate[];\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "adminJsBaseUrl: string;\n" +
    "\n" +
    "// User reaction to the project\n" +
    "@Field({ nullable: true })\n" +
    "reaction?: Reaction;\n" +
    "\n" +
    "@Field(_type => [Campaign], { nullable: true })\n" +
    "campaigns: Campaign[];\n" +
    "\n" +
    "@Column('uuid', { nullable: true, unique: true })\n" +
    "endaomentId?: string;\n" +
    "\n" +
    "// only projects with status active can be listed automatically\n" +
    "static pendingReviewSince(maximumDaysForListing: number) {\n" +
    "const maxDaysForListing = moment()\n" +
    ".subtract(maximumDaysForListing, 'days')\n" +
    ".endOf('day');\n" +
    "\n" +
    "return this.createQueryBuilder('project')\n" +
    ".where({ updatedAt: LessThan(maxDaysForListing) })\n" +
    ".andWhere('project.reviewStatus = :reviewStatus', {\n" +
    "reviewStatus: ReviewStatus.NotReviewed,\n" +
    "})\n" +
    ".andWhere('project.statusId = :statusId', { statusId: ProjStatus.active })\n" +
    ".getMany();\n" +
    "}\n" +
    "\n" +
    "static async addProjectStatusHistoryRecord(inputData: {\n" +
    "prevStatus?: ProjectStatus;\n" +
    "status: ProjectStatus;\n" +
    "project: Project;\n" +
    "reasonId?: number;\n" +
    "description?: string;\n" +
    "userId?: number;\n" +
    "}) {\n" +
    "const { project, status, prevStatus, description, reasonId, userId } =\n" +
    "inputData;\n" +
    "let reason;\n" +
    "let user;\n" +
    "\n" +
    "if (userId) {\n" +
    "user = await findUserById(userId);\n" +
    "}\n" +
    "\n" +
    "if (reasonId) {\n" +
    "reason = await ProjectStatusReason.findOne({\n" +
    "where: { id: reasonId, statusId: status.id },\n" +
    "});\n" +
    "}\n" +
    "\n" +
    "await ProjectStatusHistory.create({\n" +
    "project,\n" +
    "status,\n" +
    "prevStatus,\n" +
    "reason,\n" +
    "user,\n" +
    "description,\n" +
    "createdAt: new Date(),\n" +
    "}).save();\n" +
    "}\n" +
    "\n" +
    "// In your main class\n" +
    "@Field(_type => EstimatedMatching, { nullable: true })\n" +
    "async estimatedMatching(): Promise<EstimatedMatching | null> {\n" +
    "const activeQfRound = await findActiveQfRound();\n" +
    "if (!activeQfRound) {\n" +
    "return null;\n" +
    "}\n" +
    "const matchingPool = activeQfRound.allocatedFund;\n" +
    "\n" +
    "const projectDonationsSqrtRootSum = await getProjectDonationsSqrtRootSum(\n" +
    "this.id,\n" +
    "activeQfRound.id,\n" +
    ");\n" +
    "\n" +
    "const allProjectsSum = await getQfRoundTotalSqrtRootSumSquared(\n" +
    "activeQfRound.id,\n" +
    ");\n" +
    "\n" +
    "const estimatedClusterMatching =\n" +
    "await EstimatedClusterMatching.createQueryBuilder(\n" +
    "'estimated_cluster_matching',\n" +
    ")\n" +
    ".where('estimated_cluster_matching.\"projectId\" = :projectId', {\n" +
    "projectId: this.id,\n" +
    "})\n" +
    ".andWhere('estimated_cluster_matching.\"qfRoundId\" = :qfRoundId', {\n" +
    "qfRoundId: activeQfRound.id,\n" +
    "})\n" +
    ".getOne();\n" +
    "\n" +
    "let matching: number;\n" +
    "if (!estimatedClusterMatching) matching = 0;\n" +
    "\n" +
    "if (!estimatedClusterMatching) {\n" +
    "matching = 0;\n" +
    "} else {\n" +
    "matching = estimatedClusterMatching.matching;\n" +
    "}\n" +
    "\n" +
    "// Facilitate migration in frontend return empty values for now\n" +
    "return {\n" +
    "projectDonationsSqrtRootSum: projectDonationsSqrtRootSum,\n" +
    "allProjectsSum: allProjectsSum,\n" +
    "matchingPool,\n" +
    "matching,\n" +
    "};\n" +
    "}\n" +
    "\n" +
    "// Status 7 is deleted status\n" +
    "mayUpdateStatus(user: User) {\n" +
    "if (this.statusId === ProjStatus.cancelled) {\n" +
    "throw new Error(\n" +
    "i18n.__(\n" +
    "translationErrorMessagesKeys.THIS_PROJECT_IS_CANCELLED_OR_DEACTIVATED_ALREADY,\n" +
    "),\n" +
    ");\n" +
    "}\n" +
    "\n" +
    "if (user.id === this.adminUser?.id) {\n" +
    "return true;\n" +
    "} else {\n" +
    "throw new Error(\n" +
    "i18n.__(\n" +
    "translationErrorMessagesKeys.YOU_DONT_HAVE_ACCESS_TO_DEACTIVATE_THIS_PROJECT,\n" +
    "),\n" +
    ");\n" +
    "}\n" +
    "}\n" +
    "\n" +
    "/**\n" +
    "   * Add / remove a heart to the score\n" +
    "   * @param loved true to add a heart, false to remove\n" +
    "   */\n" +
    "updateQualityScoreHeart(loved: boolean) {\n" +
    "// TODO should remove this, we should have a function to calculate score from scratch everytime\n" +
    "if (loved) {\n" +
    "this.qualityScore = this.qualityScore + 10;\n" +
    "} else {\n" +
    "this.qualityScore = this.qualityScore - 10;\n" +
    "}\n" +
    "}\n" +
    "\n" +
    "@BeforeUpdate()\n" +
    "async updateProjectDescriptionSummary() {\n" +
    "await Project.update(\n" +
    "{ id: this.id },\n" +
    "{ descriptionSummary: getHtmlTextSummary(this.description) },\n" +
    ");\n" +
    "}\n" +
    "\n" +
    "@BeforeInsert()\n" +
    "setProjectDescriptionSummary() {\n" +
    "this.descriptionSummary = getHtmlTextSummary(this.description);\n" +
    "}\n" +
    "}\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ProjectUpdate extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Index('trgm_idx_project_title', { synchronize: false })\n" +
    "@Field(_type => String)\n" +
    "@Column()\n" +
    "title: string;\n" +
    "\n" +
    "// Virtual attribute for projectUpdate\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "projectTitle?: string;\n" +
    "\n" +
    "// Virtual attribute for projectUpdate\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "projectSlug?: string;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@Column()\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@Column()\n" +
    "userId: number;\n" +
    "\n" +
    "@Field(_type => String)\n" +
    "@Column()\n" +
    "content: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "contentSummary?: string;\n" +
    "\n" +
    "@Field(_type => Date)\n" +
    "@Column()\n" +
    "createdAt: Date;\n" +
    "\n" +
    "@Field(_type => Boolean)\n" +
    "@Column({ nullable: true })\n" +
    "isMain: boolean;\n" +
    "\n" +
    "@Field(_type => Int, { defaultValue: 0 })\n" +
    "@Column({ type: 'integer', default: 0 })\n" +
    "totalReactions: number;\n" +
    "\n" +
    "// User reaction to the project update\n" +
    "@Field(_type => Reaction, { nullable: true })\n" +
    "reaction?: Reaction;\n" +
    "\n" +
    "// Project oneToOne as virtual attribute as relation was not set properly\n" +
    "@Field(_type => Project, { nullable: true })\n" +
    "@ManyToOne(() => Project, project => project.projectUpdates)\n" +
    "project?: Project;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { default: false })\n" +
    "isNonProfitOrganization: boolean;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "organizationCountry: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "organizationWebsite: string;\n" +
    "\n" +
    "@Index('trgm_idx_project_description', { synchronize: false })\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "organizationDescription: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "twitter: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "facebook: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "linkedin: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "instagram: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "youtube: string;\n" +
    "\n" +
    "@Column({ nullable: true })\n" +
    "foundationDate: Date;\n" +
    "\n" +
    "@Column('text', { nullable: true })\n" +
    "mission: string;\n" +
    "\n" +
    "@Column('text', { nullable: true })\n" +
    "achievedMilestones: string;\n" +
    "\n" +
    "@Column('text', { nullable: true })\n" +
    "managingFundDescription: string;\n" +
    "\n" +
    "@Field(_type => FeaturedUpdate, { nullable: true })\n" +
    "@OneToOne(\n" +
    "_type => FeaturedUpdate,\n" +
    "featuredUpdate => featuredUpdate.projectUpdate,\n" +
    "{ nullable: true },\n" +
    ")\n" +
    "featuredUpdate?: FeaturedUpdate;\n" +
    "\n" +
    "// does not call with createQueryBuilder\n" +
    "@AfterInsert()\n" +
    "async updateProjectStampOnCreation() {\n" +
    "await Project.update(\n" +
    "{ id: this.projectId },\n" +
    "{ updatedAt: new Date(), latestUpdateCreationDate: new Date() },\n" +
    ");\n" +
    "}\n" +
    "\n" +
    "@AfterUpdate()\n" +
    "async updateProjectStampOnUpdate() {\n" +
    "await Project.update({ id: this.projectId }, { updatedAt: new Date() });\n" +
    "}\n" +
    "\n" +
    "@BeforeRemove()\n" +
    "async updateProjectStampOnDeletion() {\n" +
    "await Project.update({ id: this.projectId }, { updatedAt: new Date() });\n" +
    "}\n" +
    "\n" +
    "@BeforeUpdate()\n" +
    "async updateProjectUpdateContentSummary() {\n" +
    "await ProjectUpdate.update(\n" +
    "{ id: this.id },\n" +
    "{ contentSummary: getHtmlTextSummary(this.content) },\n" +
    ");\n" +
    "}\n" +
    "\n" +
    "@BeforeInsert()\n" +
    "setProjectUpdateContentSummary() {\n" +
    "this.contentSummary = getHtmlTextSummary(this.content);\n" +
    "}\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/category.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "ManyToMany,\n" +
    "ManyToOne,\n" +
    "RelationId,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { MainCategory } from './mainCategory';\n" +
    "\n" +
    "export const CATEGORY_NAMES = {\n" +
    "// There are lots of categories but I put the ones that I use here\n" +
    "registeredNonProfits: 'registered-non-profits',\n" +
    "};\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class Category extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text', { unique: true, nullable: true })\n" +
    "name: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "value: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "source: string;\n" +
    "\n" +
    "@ManyToMany(_type => Project, project => project.categories)\n" +
    "projects: Project[];\n" +
    "\n" +
    "@Field(_ => MainCategory, { nullable: true })\n" +
    "@ManyToOne(_ => MainCategory)\n" +
    "mainCategory: MainCategory;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ default: true })\n" +
    "// There are some categories that exist, we cant delete them but we dont want allow users\n" +
    "// To use them anymore on project creation/updating, so we change set the isActive false for them\n" +
    "isActive: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ default: true })\n" +
    "// We want to show active categories but dont allow frontend to use them when create/update projects\n" +
    "canUseOnFrontend: boolean;\n" +
    "\n" +
    "@RelationId((category: Category) => category.mainCategory)\n" +
    "@Column()\n" +
    "mainCategoryId: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/powerSnapshot.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, Int, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "Index,\n" +
    "OneToMany,\n" +
    "} from 'typeorm';\n" +
    "import { PowerBoostingSnapshot } from './powerBoostingSnapshot';\n" +
    "import { PowerBalanceSnapshot } from './powerBalanceSnapshot';\n" +
    "import { ColumnDateTransformer } from '../utils/entities';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class PowerSnapshot extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field(_type => Date)\n" +
    "@Column({\n" +
    "type: 'timestamp without time zone',\n" +
    "transformer: new ColumnDateTransformer(),\n" +
    "})\n" +
    "@Index({ unique: true })\n" +
    "time: Date;\n" +
    "\n" +
    "@Field(_type => Int)\n" +
    "@Column('integer', { nullable: true })\n" +
    "@Index({ unique: true })\n" +
    "blockNumber?: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ type: 'integer', nullable: true })\n" +
    "roundNumber: number;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "@Index()\n" +
    "synced?: boolean;\n" +
    "\n" +
    "@Field(_type => [PowerBoostingSnapshot], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => PowerBoostingSnapshot,\n" +
    "powerBoostingSnapshot => powerBoostingSnapshot.powerSnapshot,\n" +
    ")\n" +
    "powerBoostingSnapshots?: PowerBoostingSnapshot[];\n" +
    "\n" +
    "@Field(_type => [PowerBalanceSnapshot], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => PowerBalanceSnapshot,\n" +
    "powerBalanceSnapshot => powerBalanceSnapshot.powerSnapshot,\n" +
    ")\n" +
    "powerBalanceSnapshots?: PowerBalanceSnapshot[];\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/draftDonation.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "Index,\n" +
    "CreateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { ChainType } from '../types/network';\n" +
    "\n" +
    "export const DRAFT_DONATION_STATUS = {\n" +
    "PENDING: 'pending',\n" +
    "MATCHED: 'matched',\n" +
    "FAILED: 'failed',\n" +
    "};\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "// To mark the draft donation as matched, when the donation is created in DonationResolver\n" +
    "@Index(\n" +
    "['fromWalletAddress', 'toWalletAddress', 'networkId', 'amount', 'currency'],\n" +
    "{\n" +
    "where: `status = '${DRAFT_DONATION_STATUS.PENDING}' AND \"isQRDonation\" = false`,\n" +
    "unique: true,\n" +
    "},\n" +
    ")\n" +
    "export class DraftDonation extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: false })\n" +
    "networkId: number;\n" +
    "\n" +
    "// // TODO: support safeTransactionId\n" +
    "// @Field()\n" +
    "// @Column({ nullable: true })\n" +
    "// safeTransactionId?: string;\n" +
    "\n" +
    "@Field(_type => String)\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: ChainType,\n" +
    "default: ChainType.EVM,\n" +
    "})\n" +
    "chainType: ChainType;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: DRAFT_DONATION_STATUS,\n" +
    "default: DRAFT_DONATION_STATUS.PENDING,\n" +
    "})\n" +
    "@Index({ where: `status = '${DRAFT_DONATION_STATUS.PENDING}'` })\n" +
    "status: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "toWalletAddress: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "fromWalletAddress: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "tokenAddress: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "currency: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "anonymous: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ type: 'real' })\n" +
    "amount: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "@Index({ where: `status = '${DRAFT_DONATION_STATUS.PENDING}'` })\n" +
    "userId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Date)\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "referrerId?: string;\n" +
    "\n" +
    "// Expected call data used only for matching ERC20 transfers\n" +
    "// Is calculated and saved once during the matching time, and will be used in next iterations\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "expectedCallData?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "errorMessage?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "matchedDonationId?: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true, default: false })\n" +
    "useDonationBox?: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true })\n" +
    "relevantDonationTxHash?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "toWalletMemo?: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true })\n" +
    "qrCodeDataUrl?: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true, default: false })\n" +
    "isQRDonation?: boolean;\n" +
    "\n" +
    "@Field(_type => Date)\n" +
    "@Column({ nullable: true })\n" +
    "expiresAt?: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/powerBoostingSnapshotHistory.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';\n" +
    "import { Field, Float, ID, ObjectType } from 'type-graphql';\n" +
    "import { ColumnNumericTransformer } from '../utils/entities';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class PowerBoostingSnapshotHistory extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@Column()\n" +
    "userId: number;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@Column()\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@Column()\n" +
    "powerSnapshotId: number;\n" +
    "\n" +
    "@Field(_type => Float)\n" +
    "@Column('numeric', {\n" +
    "precision: 5, // 100.00\n" +
    "scale: 2,\n" +
    "transformer: new ColumnNumericTransformer(),\n" +
    "})\n" +
    "percentage: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/estimatedClusterMatching.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "Column,\n" +
    "Index,\n" +
    "PrimaryGeneratedColumn,\n" +
    "BaseEntity,\n" +
    "Entity,\n" +
    "ManyToOne,\n" +
    "JoinColumn,\n" +
    "Unique,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "\n" +
    "@Entity('estimated_cluster_matching')\n" +
    "@Index('estimated_cluster_matching_project_id_qfround_id', [\n" +
    "'projectId',\n" +
    "'qfRoundId',\n" +
    "])\n" +
    "@Unique('unique_projectId_qfRoundId', ['projectId', 'qfRoundId'])\n" +
    "@Index('estimated_cluster_matching_matching', ['matching'])\n" +
    "@ObjectType()\n" +
    "export class EstimatedClusterMatching extends BaseEntity {\n" +
    "@Field()\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number; // New primary key\n" +
    "\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project, project => project.projectEstimatedMatchingView)\n" +
    "@JoinColumn({ referencedColumnName: 'id' })\n" +
    "project: Project;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "qfRoundId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('double precision')\n" +
    "matching: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/projectVerificationForm.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "Entity,\n" +
    "Index,\n" +
    "JoinColumn,\n" +
    "ManyToOne,\n" +
    "OneToMany,\n" +
    "OneToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "import { SocialProfile } from './socialProfile';\n" +
    "import { ChainType } from '../types/network';\n" +
    "\n" +
    "export enum PROJECT_VERIFICATION_STATUSES {\n" +
    "VERIFIED = 'verified',\n" +
    "DRAFT = 'draft',\n" +
    "SUBMITTED = 'submitted',\n" +
    "REJECTED = 'rejected',\n" +
    "}\n" +
    "\n" +
    "export const PROJECT_VERIFICATION_STEPS = {\n" +
    "// Order of these steps are important, please see https://github.com/Giveth/giveth-dapps-v2/issues/893\n" +
    "PERSONAL_INFO: 'personalInfo',\n" +
    "PROJECT_REGISTRY: 'projectRegistry',\n" +
    "PROJECT_CONTACTS: 'projectContacts',\n" +
    "MILESTONES: 'milestones',\n" +
    "MANAGING_FUNDS: 'managingFunds',\n" +
    "TERM_AND_CONDITION: 'termAndCondition',\n" +
    "SUBMIT: 'submit',\n" +
    "};\n" +
    "\n" +
    "// Representative of the project, no specifically the user\n" +
    "@ObjectType()\n" +
    "export class PersonalInfo {\n" +
    "@Field({ nullable: true })\n" +
    "fullName?: string;\n" +
    "@Field({ nullable: true })\n" +
    "walletAddress?: string;\n" +
    "@Field({ nullable: true })\n" +
    "email?: string;\n" +
    "}\n" +
    "\n" +
    "@ObjectType()\n" +
    "export class ProjectRegistry {\n" +
    "@Field({ nullable: true })\n" +
    "isNonProfitOrganization?: boolean;\n" +
    "@Field({ nullable: true })\n" +
    "organizationCountry?: string;\n" +
    "@Field({ nullable: true })\n" +
    "organizationWebsite?: string;\n" +
    "@Field({ nullable: true })\n" +
    "organizationDescription?: string;\n" +
    "@Field({ nullable: true })\n" +
    "organizationName?: string;\n" +
    "@Field(_type => [String], { nullable: true })\n" +
    "attachments?: string[];\n" +
    "}\n" +
    "\n" +
    "@ObjectType()\n" +
    "export class ProjectContacts {\n" +
    "@Field({ nullable: true })\n" +
    "name?: string;\n" +
    "@Field({ nullable: true })\n" +
    "url?: string;\n" +
    "}\n" +
    "\n" +
    "@ObjectType()\n" +
    "export class Milestones {\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "foundationDate?: string;\n" +
    "@Field({ nullable: true })\n" +
    "mission?: string;\n" +
    "@Field({ nullable: true })\n" +
    "achievedMilestones?: string;\n" +
    "@Field(_type => [String], { nullable: true })\n" +
    "achievedMilestonesProofs?: string[];\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "problem?: string;\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "plans?: string;\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "impact?: string;\n" +
    "}\n" +
    "\n" +
    "@ObjectType()\n" +
    "export class FormRelatedAddress {\n" +
    "@Field({ nullable: true })\n" +
    "title: string;\n" +
    "@Field({ nullable: true })\n" +
    "address: string;\n" +
    "@Field({ nullable: true })\n" +
    "memo?: string;\n" +
    "@Field({ nullable: true })\n" +
    "networkId: number;\n" +
    "@Field(_type => ChainType, { defaultValue: ChainType.EVM, nullable: true })\n" +
    "chainType?: ChainType;\n" +
    "}\n" +
    "\n" +
    "@ObjectType()\n" +
    "export class ManagingFunds {\n" +
    "@Field({ nullable: true })\n" +
    "description: string;\n" +
    "\n" +
    "@Field(() => [FormRelatedAddress], { nullable: true })\n" +
    "relatedAddresses: FormRelatedAddress[];\n" +
    "}\n" +
    "\n" +
    "@ObjectType()\n" +
    "export class Comment {\n" +
    "@Field({ nullable: true })\n" +
    "email: string;\n" +
    "@Field({ nullable: true })\n" +
    "content: string;\n" +
    "@Field({ nullable: true })\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "@ObjectType()\n" +
    "export class CommentsSection {\n" +
    "@Field(() => [Comment], { nullable: true })\n" +
    "comments: Comment[];\n" +
    "}\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ProjectVerificationForm extends BaseEntity {\n" +
    "/**\n" +
    "   * @see {@link https://github.com/Giveth/giveth-dapps-v2/issues/711#issuecomment-1130001342}\n" +
    "   */\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Project)\n" +
    "@OneToOne(_type => Project)\n" +
    "@JoinColumn()\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId(\n" +
    "(projectVerificationForm: ProjectVerificationForm) =>\n" +
    "projectVerificationForm.project,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@ManyToOne(_type => User, { eager: true })\n" +
    "reviewer?: User;\n" +
    "\n" +
    "@RelationId(\n" +
    "(projectVerificationForm: ProjectVerificationForm) =>\n" +
    "projectVerificationForm.reviewer,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "reviewerId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "user: User;\n" +
    "\n" +
    "@RelationId(\n" +
    "(projectVerificationForm: ProjectVerificationForm) =>\n" +
    "projectVerificationForm.user,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "userId: number;\n" +
    "\n" +
    "@Field(_type => [SocialProfile], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => SocialProfile,\n" +
    "socialProfile => socialProfile.projectVerificationForm,\n" +
    ")\n" +
    "socialProfiles?: SocialProfile[];\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: PROJECT_VERIFICATION_STATUSES,\n" +
    "default: PROJECT_VERIFICATION_STATUSES.DRAFT,\n" +
    "})\n" +
    "status: PROJECT_VERIFICATION_STATUSES;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "verifiedAt: Date;\n" +
    "\n" +
    "// https://github.com/typeorm/typeorm/issues/4674#issuecomment-618073862\n" +
    "@Field(_type => PersonalInfo, { nullable: true })\n" +
    "@Column('jsonb', { nullable: true })\n" +
    "personalInfo: PersonalInfo;\n" +
    "\n" +
    "@Field(_type => ProjectRegistry, { nullable: true })\n" +
    "@Column('jsonb', { nullable: true })\n" +
    "projectRegistry: ProjectRegistry;\n" +
    "\n" +
    "@Field(_type => [ProjectContacts], { nullable: true })\n" +
    "@Column('jsonb', { nullable: true })\n" +
    "projectContacts: ProjectContacts[];\n" +
    "\n" +
    "@Field(_type => Milestones, { nullable: true })\n" +
    "@Column('jsonb', { nullable: true })\n" +
    "milestones: Milestones;\n" +
    "\n" +
    "@Field(_type => ManagingFunds, { nullable: true })\n" +
    "@Column('jsonb', { nullable: true })\n" +
    "managingFunds: ManagingFunds;\n" +
    "\n" +
    "@Field(_type => CommentsSection, { nullable: true })\n" +
    "@Column('jsonb', { nullable: true })\n" +
    "commentsSection: CommentsSection;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "lastStep: string | null;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: false })\n" +
    "@Column({ default: false })\n" +
    "emailConfirmed: boolean;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "email?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "emailConfirmationToken: string | null;\n" +
    "\n" +
    "@Field(_type => Date, { nullable: true })\n" +
    "@Column('timestamptz', { nullable: true })\n" +
    "emailConfirmationTokenExpiredAt: Date | null;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column({ default: false })\n" +
    "emailConfirmationSent: boolean;\n" +
    "\n" +
    "@Field(_type => Date, { nullable: true })\n" +
    "@Column({ type: 'timestamptz', nullable: true })\n" +
    "emailConfirmationSentAt: Date | null;\n" +
    "\n" +
    "@Field(_type => Date, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "emailConfirmedAt: Date;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('boolean', { default: false, nullable: true })\n" +
    "isTermAndConditionsAccepted?: boolean;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/sybil.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "ManyToOne,\n" +
    "RelationId,\n" +
    "BaseEntity,\n" +
    "Unique,\n" +
    "} from 'typeorm';\n" +
    "import { User } from './user';\n" +
    "import { QfRound } from './qfRound';\n" +
    "\n" +
    "@ObjectType()\n" +
    "@Entity()\n" +
    "@Unique(['userId', 'qfRoundId'])\n" +
    "export class Sybil extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Field(_type => User)\n" +
    "@ManyToOne(_type => User, { eager: true })\n" +
    "user: User;\n" +
    "\n" +
    "@RelationId((sybil: Sybil) => sybil.user)\n" +
    "@Column()\n" +
    "userId: number;\n" +
    "\n" +
    "@Field(_type => QfRound)\n" +
    "@ManyToOne(_type => QfRound, { eager: true })\n" +
    "qfRound: QfRound;\n" +
    "\n" +
    "@RelationId((sybil: Sybil) => sybil.qfRound)\n" +
    "@Column()\n" +
    "qfRoundId: number;\n" +
    "\n" +
    "@Column()\n" +
    "walletAddress: string;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/instantPowerBalance.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "Index,\n" +
    "} from 'typeorm';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class InstantPowerBalance extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@Column()\n" +
    "@Index({ unique: true })\n" +
    "userId: number;\n" +
    "\n" +
    "@Field({ defaultValue: 0 })\n" +
    "@Column('float')\n" +
    "balance: number;\n" +
    "\n" +
    "// the timestamp (of chain block) the balance value is update at\n" +
    "@Field({ nullable: true })\n" +
    "@Column()\n" +
    "balanceAggregatorUpdatedAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/userQfRoundModelScore.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, Float, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "Entity,\n" +
    "Index,\n" +
    "PrimaryGeneratedColumn,\n" +
    "UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "\n" +
    "@ObjectType()\n" +
    "@Entity()\n" +
    "export class UserQfRoundModelScore extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => ID, { nullable: false })\n" +
    "@Column()\n" +
    "userId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => ID, { nullable: false })\n" +
    "@Column()\n" +
    "qfRoundId: number;\n" +
    "\n" +
    "@Field(_type => Float, { nullable: false })\n" +
    "@Column({ type: 'real', nullable: false, default: 0 })\n" +
    "score: number;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/entities.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { DataSourceOptions } from 'typeorm';\n" +
    "import { Organization } from './organization';\n" +
    "import { Category } from './category';\n" +
    "import { Token } from './token';\n" +
    "import { Donation } from './donation';\n" +
    "import { Wallet } from './wallet';\n" +
    "import { ProjectStatus } from './projectStatus';\n" +
    "import { ProjectImage } from './projectImage';\n" +
    "import { BankAccount, StripeTransaction } from './bankAccount';\n" +
    "import { AccountVerification } from './accountVerification';\n" +
    "import { ProjectStatusReason } from './projectStatusReason';\n" +
    "import { ProjectStatusHistory } from './projectStatusHistory';\n" +
    "import { ThirdPartyProjectImport } from './thirdPartyProjectImport';\n" +
    "import { ProjectVerificationForm } from './projectVerificationForm';\n" +
    "import { ProjectAddress } from './projectAddress';\n" +
    "import { SocialProfile } from './socialProfile';\n" +
    "import { MainCategory } from './mainCategory';\n" +
    "import { PowerBoosting } from './powerBoosting';\n" +
    "import { UserProjectPowerView } from '../views/userProjectPowerView';\n" +
    "import { ProjectUserInstantPowerView } from '../views/projectUserInstantPowerView';\n" +
    "import { PowerRound } from './powerRound';\n" +
    "import { ProjectPowerView } from '../views/projectPowerView';\n" +
    "import { PowerSnapshot } from './powerSnapshot';\n" +
    "import { PowerBalanceSnapshot } from './powerBalanceSnapshot';\n" +
    "import { PowerBoostingSnapshot } from './powerBoostingSnapshot';\n" +
    "import { ProjectFuturePowerView } from '../views/projectFuturePowerView';\n" +
    "import { PowerSnapshotHistory } from './powerSnapshotHistory';\n" +
    "import { PowerBalanceSnapshotHistory } from './powerBalanceSnapshotHistory';\n" +
    "import { PowerBoostingSnapshotHistory } from './powerBoostingSnapshotHistory';\n" +
    "import { LastSnapshotProjectPowerView } from '../views/lastSnapshotProjectPowerView';\n" +
    "import { User } from './user';\n" +
    "import { Project, ProjectUpdate } from './project';\n" +
    "import { Reaction } from './reaction';\n" +
    "import BroadcastNotification from './broadcastNotification';\n" +
    "import { FeaturedUpdate } from './featuredUpdate';\n" +
    "import { Campaign } from './campaign';\n" +
    "import { PreviousRoundRank } from './previousRoundRank';\n" +
    "import { InstantPowerBalance } from './instantPowerBalance';\n" +
    "import { InstantPowerFetchState } from './instantPowerFetchState';\n" +
    "import { ProjectInstantPowerView } from '../views/projectInstantPowerView';\n" +
    "import { QfRound } from './qfRound';\n" +
    "import { ReferredEvent } from './referredEvent';\n" +
    "import { QfRoundHistory } from './qfRoundHistory';\n" +
    "import { ProjectEstimatedMatchingView } from './ProjectEstimatedMatchingView';\n" +
    "import { AnchorContractAddress } from './anchorContractAddress';\n" +
    "import { RecurringDonation } from './recurringDonation';\n" +
    "import { Sybil } from './sybil';\n" +
    "import { DraftDonation } from './draftDonation';\n" +
    "import { ProjectFraud } from './projectFraud';\n" +
    "import { ProjectActualMatchingView } from './ProjectActualMatchingView';\n" +
    "import { ProjectSocialMedia } from './projectSocialMedia';\n" +
    "import { DraftRecurringDonation } from './draftRecurringDonation';\n" +
    "import { UserQfRoundModelScore } from './userQfRoundModelScore';\n" +
    "import { ProjectGivbackRankView } from './ProjectGivbackRankView';\n" +
    "import { EstimatedClusterMatching } from './estimatedClusterMatching';\n" +
    "import { SitemapUrl } from './sitemapUrl';\n" +
    "\n" +
    "export const getEntities = (): DataSourceOptions['entities'] => {\n" +
    "return [\n" +
    "Organization,\n" +
    "User,\n" +
    "ReferredEvent,\n" +
    "Project,\n" +
    "\n" +
    "BankAccount,\n" +
    "StripeTransaction,\n" +
    "Category,\n" +
    "ProjectUpdate,\n" +
    "FeaturedUpdate,\n" +
    "Reaction,\n" +
    "Donation,\n" +
    "DraftDonation,\n" +
    "Token,\n" +
    "Wallet,\n" +
    "ProjectStatus,\n" +
    "ProjectStatusReason,\n" +
    "ProjectStatusHistory,\n" +
    "AccountVerification,\n" +
    "ProjectImage,\n" +
    "ThirdPartyProjectImport,\n" +
    "ProjectVerificationForm,\n" +
    "ProjectAddress,\n" +
    "ProjectSocialMedia,\n" +
    "SocialProfile,\n" +
    "MainCategory,\n" +
    "PowerBoosting,\n" +
    "PowerRound,\n" +
    "PowerSnapshot,\n" +
    "PowerBalanceSnapshot,\n" +
    "PowerBoostingSnapshot,\n" +
    "EstimatedClusterMatching,\n" +
    "\n" +
    "// View\n" +
    "UserProjectPowerView,\n" +
    "ProjectPowerView,\n" +
    "ProjectFuturePowerView,\n" +
    "LastSnapshotProjectPowerView,\n" +
    "ProjectInstantPowerView,\n" +
    "ProjectUserInstantPowerView,\n" +
    "ProjectEstimatedMatchingView,\n" +
    "ProjectActualMatchingView,\n" +
    "\n" +
    "// historic snapshots\n" +
    "PowerSnapshotHistory,\n" +
    "PowerBalanceSnapshotHistory,\n" +
    "PowerBoostingSnapshotHistory,\n" +
    "BroadcastNotification,\n" +
    "\n" +
    "Campaign,\n" +
    "\n" +
    "PreviousRoundRank,\n" +
    "\n" +
    "InstantPowerBalance,\n" +
    "InstantPowerFetchState,\n" +
    "\n" +
    "QfRound,\n" +
    "QfRoundHistory,\n" +
    "Sybil,\n" +
    "ProjectFraud,\n" +
    "UserQfRoundModelScore,\n" +
    "\n" +
    "AnchorContractAddress,\n" +
    "RecurringDonation,\n" +
    "DraftRecurringDonation,\n" +
    "\n" +
    "ProjectGivbackRankView,\n" +
    "\n" +
    "SitemapUrl,\n" +
    "];\n" +
    "};\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/CronJob.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import { PrimaryGeneratedColumn, Column, Entity, BaseEntity } from 'typeorm';\n" +
    "\n" +
    "@ObjectType()\n" +
    "@Entity('job', {\n" +
    "synchronize: false,\n" +
    "})\n" +
    "// Postgres cron jobs\n" +
    "export class CronJob extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn({ name: 'jobid' })\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "schedule: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "command: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ name: 'jobname' })\n" +
    "jobName: string;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/powerBoostingSnapshot.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "Entity,\n" +
    "Index,\n" +
    "ManyToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "} from 'typeorm';\n" +
    "import { Field, Float, ID, ObjectType } from 'type-graphql';\n" +
    "import { User } from './user';\n" +
    "import { ColumnNumericTransformer } from '../utils/entities';\n" +
    "import { PowerSnapshot } from './powerSnapshot';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Index(['userId', 'projectId', 'powerSnapshotId'], { unique: true })\n" +
    "export class PowerBoostingSnapshot extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@RelationId(\n" +
    "(powerBoostingSnapshot: PowerBoostingSnapshot) =>\n" +
    "powerBoostingSnapshot.user,\n" +
    ")\n" +
    "@Column()\n" +
    "userId: number;\n" +
    "\n" +
    "@Field(_type => User, { nullable: false })\n" +
    "@ManyToOne(_type => User, { nullable: false })\n" +
    "user: User;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@Column()\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@RelationId(\n" +
    "(powerBoostingSnapshot: PowerBoostingSnapshot) =>\n" +
    "powerBoostingSnapshot.powerSnapshot,\n" +
    ")\n" +
    "@Column()\n" +
    "powerSnapshotId: number;\n" +
    "\n" +
    "@Field(_type => PowerSnapshot, { nullable: true })\n" +
    "@ManyToOne(_type => PowerSnapshot, { nullable: false })\n" +
    "powerSnapshot: PowerSnapshot;\n" +
    "\n" +
    "@Field(_type => Float)\n" +
    "@Column('numeric', {\n" +
    "precision: 5, // 100.00\n" +
    "scale: 2,\n" +
    "transformer: new ColumnNumericTransformer(),\n" +
    "})\n" +
    "percentage: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/powerSnapshotHistory.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, Int, ObjectType } from 'type-graphql';\n" +
    "import { Column, Entity, BaseEntity, Index, PrimaryColumn } from 'typeorm';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class PowerSnapshotHistory extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field(_type => Date)\n" +
    "@Column()\n" +
    "@Index({ unique: true })\n" +
    "time: Date;\n" +
    "\n" +
    "@Field(_type => Int)\n" +
    "@Column('integer', { nullable: true })\n" +
    "@Index({ unique: true })\n" +
    "blockNumber?: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ type: 'integer', nullable: true })\n" +
    "roundNumber: number;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "@Index()\n" +
    "synced?: boolean;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/projectStatusReason.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "ManyToOne,\n" +
    "RelationId,\n" +
    "} from 'typeorm';\n" +
    "import { ProjectStatus } from './projectStatus';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ProjectStatusReason extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true })\n" +
    "description: string;\n" +
    "\n" +
    "@Field(_type => ProjectStatus)\n" +
    "@ManyToOne(_type => ProjectStatus)\n" +
    "status: ProjectStatus;\n" +
    "\n" +
    "@RelationId(\n" +
    "(projectStatusReason: ProjectStatusReason) => projectStatusReason.status,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "statusId: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/instantPowerFetchState.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { BaseEntity, Check, Column, Entity, PrimaryColumn } from 'typeorm';\n" +
    "import { Field, ObjectType } from 'type-graphql';\n" +
    "import { ColumnBigIntTransformer } from '../utils/entities';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Check('\"id\"')\n" +
    "export class InstantPowerFetchState extends BaseEntity {\n" +
    "@Field(_type => Boolean)\n" +
    "@PrimaryColumn()\n" +
    "id: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('bigint', {\n" +
    "transformer: new ColumnBigIntTransformer(),\n" +
    "})\n" +
    "maxFetchedUpdateAtTimestampMS: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/projectAddress.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "Entity,\n" +
    "Index,\n" +
    "ManyToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "Unique,\n" +
    "UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "import { ChainType } from '../types/network';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Unique(['address', 'networkId', 'project'])\n" +
    "export class ProjectAddress extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "title?: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "networkId: number;\n" +
    "\n" +
    "@Field(_type => String)\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: ChainType,\n" +
    "default: ChainType.EVM,\n" +
    "})\n" +
    "chainType: ChainType;\n" +
    "\n" +
    "@Index()\n" +
    "@Field()\n" +
    "@Column()\n" +
    "address: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project)\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId((relatedAddress: ProjectAddress) => relatedAddress.project)\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "user: User;\n" +
    "\n" +
    "@RelationId((relatedAddress: ProjectAddress) => relatedAddress.user)\n" +
    "@Column({ nullable: true })\n" +
    "userId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { default: false })\n" +
    "isRecipient: boolean;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "memo: string;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/powerBalanceSnapshotHistory.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import { Column, Entity, BaseEntity, PrimaryColumn } from 'typeorm';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class PowerBalanceSnapshotHistory extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@Column()\n" +
    "userId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('float')\n" +
    "balance: number;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@Column()\n" +
    "powerSnapshotId: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/donation.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, Int, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "ManyToOne,\n" +
    "RelationId,\n" +
    "Index,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "import { QfRound } from './qfRound';\n" +
    "import { ChainType } from '../types/network';\n" +
    "import { RecurringDonation } from './recurringDonation';\n" +
    "\n" +
    "export const DONATION_STATUS = {\n" +
    "PENDING: 'pending',\n" +
    "VERIFIED: 'verified',\n" +
    "FAILED: 'failed',\n" +
    "};\n" +
    "\n" +
    "export const DONATION_ORIGINS = {\n" +
    "IDRISS_TWITTER: 'Idriss',\n" +
    "DRAFT_DONATION_MATCHING: 'DraftDonationMatching',\n" +
    "SUPER_FLUID: 'SuperFluid',\n" +
    "};\n" +
    "\n" +
    "export const DONATION_TYPES = {\n" +
    "CSV_AIR_DROP: 'csvAirDrop',\n" +
    "GNOSIS_SAFE: 'gnosisSafe',\n" +
    "POIGN_ART: 'poignArt',\n" +
    "\n" +
    "// TODO we should write a migration to fill this field for transak donations\n" +
    "TRANSAK: 'transak',\n" +
    "};\n" +
    "\n" +
    "export enum SortField {\n" +
    "CreationDate = 'createdAt',\n" +
    "TokenAmount = 'amount',\n" +
    "UsdAmount = 'valueUsd',\n" +
    "}\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class Donation extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "// It's transactionHash for crypto donation, and trackingCode for fiat donation\n" +
    "transactionId: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('integer', { nullable: true })\n" +
    "// To match the transaction in case user has done speed up\n" +
    "nonce: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: false })\n" +
    "transactionNetworkId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true })\n" +
    "safeTransactionId?: string;\n" +
    "\n" +
    "@Field(_type => String)\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: ChainType,\n" +
    "default: ChainType.EVM,\n" +
    "})\n" +
    "chainType: ChainType;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { default: false })\n" +
    "// https://github.com/Giveth/impact-graph/issues/407#issuecomment-1066892258\n" +
    "isProjectGivbackEligible: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text', { default: DONATION_STATUS.PENDING })\n" +
    "status: string;\n" +
    "\n" +
    "@Field(_type => Boolean)\n" +
    "@Column({ type: 'boolean', default: false })\n" +
    "isExternal: boolean;\n" +
    "\n" +
    "@Field(_type => Int)\n" +
    "@Column('integer', { nullable: true })\n" +
    "blockNumber?: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "origin: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "verifyErrorMessage: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { default: false })\n" +
    "speedup: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { default: false })\n" +
    "isCustomToken: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { default: false })\n" +
    "isFiat: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "toWalletAddress: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "fromWalletAddress: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "tokenAddress?: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "currency: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "anonymous: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ type: 'real' })\n" +
    "amount: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ type: 'real', nullable: true })\n" +
    "valueEth: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ type: 'real', nullable: true })\n" +
    "valueUsd: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ type: 'real', nullable: true })\n" +
    "priceEth: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ type: 'real', nullable: true })\n" +
    "priceUsd: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ type: 'real', nullable: true })\n" +
    "givbackFactor: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "powerRound: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ type: 'real', nullable: true })\n" +
    "projectRank?: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ type: 'real', nullable: true })\n" +
    "bottomRankInRound?: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project, { eager: true })\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId((donation: Donation) => donation.project)\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => QfRound, { nullable: true })\n" +
    "@ManyToOne(_type => QfRound, { eager: true })\n" +
    "qfRound: QfRound;\n" +
    "\n" +
    "@RelationId((donation: Donation) => donation.qfRound)\n" +
    "@Column({ nullable: true })\n" +
    "qfRoundId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => QfRound, { nullable: true })\n" +
    "@ManyToOne(_type => QfRound, { eager: true })\n" +
    "distributedFundQfRound: QfRound;\n" +
    "\n" +
    "@RelationId((donation: Donation) => donation.distributedFundQfRound)\n" +
    "@Column({ nullable: true })\n" +
    "distributedFundQfRoundId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "user?: User;\n" +
    "\n" +
    "@RelationId((donation: Donation) => donation.user)\n" +
    "@Column({ nullable: true })\n" +
    "userId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => RecurringDonation, { nullable: true })\n" +
    "@ManyToOne(_type => RecurringDonation, { eager: true, nullable: true })\n" +
    "recurringDonation?: RecurringDonation;\n" +
    "\n" +
    "@RelationId((donation: Donation) => donation.recurringDonation)\n" +
    "@Column({ nullable: true })\n" +
    "recurringDonationId: number;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "contactEmail?: string | null;\n" +
    "\n" +
    "@Field(_type => Number, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "qfRoundUserScore?: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Date)\n" +
    "@Column()\n" +
    "createdAt: Date;\n" +
    "\n" +
    "@Field(_type => Date, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "importDate: Date;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "donationType?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "onramperTransactionStatus?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "onramperId?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "referrerWallet?: string;\n" +
    "\n" +
    "@Field(_type => Date, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "referralStartTimestamp?: Date;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: false })\n" +
    "@Column({ nullable: false, default: false })\n" +
    "isReferrerGivbackEligible: boolean;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "transakStatus?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "transakTransactionLink?: string;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column({ nullable: true, default: false })\n" +
    "segmentNotified: boolean;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column({ nullable: true, default: false })\n" +
    "isTokenEligibleForGivback: boolean;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('integer', { nullable: true })\n" +
    "// To match the superFluid Virtual Period\n" +
    "virtualPeriodStart?: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('integer', { nullable: true })\n" +
    "// To match the superFluid Virtual Period\n" +
    "virtualPeriodEnd?: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('boolean', { nullable: true, default: false })\n" +
    "useDonationBox?: boolean;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "relevantDonationTxHash?: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ default: false })\n" +
    "isQRDonation: boolean;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "toWalletMemo?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('decimal', { precision: 5, scale: 2, nullable: true })\n" +
    "donationPercentage?: number;\n" +
    "\n" +
    "static async findXdaiGivDonationsWithoutPrice() {\n" +
    "return this.createQueryBuilder('donation')\n" +
    ".where(`donation.currency = 'GIV' AND donation.\"valueUsd\" IS NULL `)\n" +
    ".getMany();\n" +
    "}\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/projectImage.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "ManyToOne,\n" +
    "RelationId,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ProjectImage extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project, { eager: true })\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId((projectImage: ProjectImage) => projectImage.project)\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "url?: string;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/Country.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ObjectType } from 'type-graphql';\n" +
    "\n" +
    "@ObjectType()\n" +
    "export class Country {\n" +
    "@Field()\n" +
    "name: string;\n" +
    "\n" +
    "@Field()\n" +
    "code: string;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/qfRound.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "Field,\n" +
    "ID,\n" +
    "ObjectType,\n" +
    "Int,\n" +
    "Float,\n" +
    "registerEnumType,\n" +
    "} from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "ManyToMany,\n" +
    "UpdateDateColumn,\n" +
    "CreateDateColumn,\n" +
    "Index,\n" +
    "OneToMany,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { Donation } from './donation';\n" +
    "\n" +
    "export enum QfStrategyEnum {\n" +
    "Cocm = 'cocm',\n" +
    "Regular = 'regular',\n" +
    "}\n" +
    "\n" +
    "registerEnumType(QfStrategyEnum, {\n" +
    "name: 'QfStrategyEnum', // Name to expose in GraphQL schema\n" +
    "});\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class QfRound extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "name: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "title: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "description: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Index({ unique: true })\n" +
    "@Column('text')\n" +
    "slug: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "isActive: boolean;\n" +
    "\n" +
    "@Field(_type => Number)\n" +
    "@Column()\n" +
    "allocatedFund: number;\n" +
    "\n" +
    "@Field(_type => Number, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "allocatedFundUSD: number;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "allocatedFundUSDPreferred: boolean;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "allocatedTokenSymbol: string;\n" +
    "\n" +
    "@Field(_type => Number, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "allocatedTokenChainId: number;\n" +
    "\n" +
    "@Field(_type => Number)\n" +
    "@Column('real', { default: 0.2 })\n" +
    "maximumReward: number;\n" +
    "\n" +
    "@Field(_type => Number)\n" +
    "@Column('real')\n" +
    "minimumPassportScore: number;\n" +
    "\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "@Column({ type: 'float', nullable: true })\n" +
    "minMBDScore: number;\n" +
    "\n" +
    "@Field(_type => Number)\n" +
    "@Column('real', { default: 1 })\n" +
    "minimumValidUsdValue: number;\n" +
    "\n" +
    "@Field(_type => [Int], { nullable: true }) // Define the new field as an array of integers\n" +
    "@Column('integer', { array: true, default: [] })\n" +
    "eligibleNetworks: number[];\n" +
    "\n" +
    "@Field(_type => Date)\n" +
    "@Column()\n" +
    "beginDate: Date;\n" +
    "\n" +
    "@Field(_type => Date)\n" +
    "@Column()\n" +
    "endDate: Date;\n" +
    "\n" +
    "@Field(_type => QfStrategyEnum, { nullable: true })\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: QfStrategyEnum,\n" +
    "default: QfStrategyEnum.Regular,\n" +
    "nullable: true,\n" +
    "})\n" +
    "qfStrategy?: QfStrategyEnum;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "bannerBgImage: string;\n" +
    "\n" +
    "@Field(_type => [String])\n" +
    "@Column('text', { array: true, default: [] })\n" +
    "sponsorsImgs: string[];\n" +
    "\n" +
    "@Field(_type => Boolean)\n" +
    "@Column({ default: false })\n" +
    "isDataAnalysisDone: boolean;\n" +
    "\n" +
    "@Field(_type => Date, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "clusterMatchingSyncAt?: Date;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "\n" +
    "@ManyToMany(_type => Project, project => project.qfRounds)\n" +
    "projects: Project[];\n" +
    "\n" +
    "@OneToMany(_type => Donation, donation => donation.qfRound)\n" +
    "donations: Donation[];\n" +
    "\n" +
    "// only projects with status active can be listed automatically\n" +
    "isEligibleNetwork(donationNetworkId: number): boolean {\n" +
    "// when not specified, all are valid\n" +
    "if (this.eligibleNetworks.length === 0) return true;\n" +
    "\n" +
    "return this.eligibleNetworks.includes(donationNetworkId);\n" +
    "}\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/ProjectEstimatedMatchingView.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "Column,\n" +
    "Index,\n" +
    "PrimaryColumn,\n" +
    "BaseEntity,\n" +
    "ViewEntity,\n" +
    "ManyToOne,\n" +
    "ViewColumn,\n" +
    "JoinColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "\n" +
    "@ViewEntity('project_estimated_matching_view', { synchronize: false })\n" +
    "@Index('project_estimated_matching_view_project_id_qfround_id', [\n" +
    "'projectId',\n" +
    "'qfRoundId',\n" +
    "])\n" +
    "@Index('project_estimated_matching_view_sqrt_root_sum', ['sqrtRootSum'])\n" +
    "@ObjectType()\n" +
    "export class ProjectEstimatedMatchingView extends BaseEntity {\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project, project => project.projectEstimatedMatchingView)\n" +
    "@JoinColumn({ referencedColumnName: 'id' })\n" +
    "project: Project;\n" +
    "\n" +
    "@Field()\n" +
    "@ViewColumn()\n" +
    "@PrimaryColumn()\n" +
    "projectId: number;\n" +
    "\n" +
    "// QF Round ID associated with the donations\n" +
    "@ViewColumn()\n" +
    "@Field()\n" +
    "@PrimaryColumn()\n" +
    "qfRoundId: number;\n" +
    "\n" +
    "// Sum of the square root of the value in USD of the donations\n" +
    "@ViewColumn()\n" +
    "@Column('double precision')\n" +
    "sqrtRootSum: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/campaign.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "UpdateDateColumn,\n" +
    "CreateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "\n" +
    "// Copied from projects enums\n" +
    "export enum CampaignSortingField {\n" +
    "MostFunded = 'MostFunded',\n" +
    "MostLiked = 'MostLiked',\n" +
    "Newest = 'Newest',\n" +
    "Oldest = 'Oldest',\n" +
    "RecentlyUpdated = 'RecentlyUpdated',\n" +
    "QualityScore = 'QualityScore',\n" +
    "GIVPower = 'GIVPower',\n" +
    "}\n" +
    "\n" +
    "export enum CampaignFilterField {\n" +
    "verified = 'verified',\n" +
    "givingBlocksId = 'givingBlocksId',\n" +
    "acceptFundOnGnosis = 'acceptFundOnGnosis',\n" +
    "fromGivingBlock = 'fromGivingBlock',\n" +
    "boostedWithGivPower = 'boostedWithGivPower',\n" +
    "}\n" +
    "\n" +
    "export enum CampaignType {\n" +
    "// https://github.com/Giveth/impact-graph/blob/staging/docs/campaignsInstruction.md\n" +
    "\n" +
    "// In these type of projects we pick some projects to show them in campaign,\n" +
    "// for instance for Turkey earthquake we pick some projects.\n" +
    "// so we just need to add slug of those projects in Related Projects Slugs and in\n" +
    "// what order we add them they will be shown in frontend\n" +
    "ManuallySelected = 'ManuallySelected',\n" +
    "\n" +
    "//  Sometimes in a campaign we just want to show projects in an specified order,\n" +
    "//  for instance we can create a campaign like ** Check projects that received most likes** so for\n" +
    "//  this campaign you set SortField as campaign type and then you can use one of below sorting fields\n" +
    "SortField = 'SortField',\n" +
    "\n" +
    "// Sometimes we need to filter some projects in a campaign,\n" +
    "// for instance Let's verified projects that accept funds on Gnosis chain,\n" +
    "// for this we can Add verified and acceptFundOnGnosis filters\n" +
    "FilterFields = 'FilterFields',\n" +
    "\n" +
    "//  Some campaigns don't include any project in them and they are just some banner\n" +
    "//  like Feeling $nice? campaign in below image\n" +
    "WithoutProjects = 'WithoutProjects',\n" +
    "}\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class Campaign extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text', { nullable: false, unique: true })\n" +
    "slug: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text', { nullable: false })\n" +
    "title: string;\n" +
    "\n" +
    "@Field(_type => String)\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: CampaignType,\n" +
    "})\n" +
    "type: CampaignType;\n" +
    "\n" +
    "@Field({ nullable: false })\n" +
    "@Column({ default: true })\n" +
    "isActive: boolean;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ default: false })\n" +
    "isNew: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ default: false })\n" +
    "isFeatured: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text', { nullable: false })\n" +
    "description: string;\n" +
    "\n" +
    "@Field(_type => [String], { nullable: true })\n" +
    "@Column('text', { nullable: true, array: true })\n" +
    "hashtags: string[];\n" +
    "\n" +
    "@Field(_type => [String], { nullable: true })\n" +
    "@Column('text', { nullable: true, array: true })\n" +
    "relatedProjectsSlugs: string[];\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "// ipfs link\n" +
    "photo?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "// ipfs link\n" +
    "video?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "// ipfs link\n" +
    "videoPreview?: string;\n" +
    "\n" +
    "@Field(_type => [Project], { nullable: true })\n" +
    "relatedProjects: Project[];\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "relatedProjectsCount?: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "order: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "landingLink: string;\n" +
    "\n" +
    "@Field(_type => [String], { nullable: true })\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: CampaignFilterField,\n" +
    "nullable: true,\n" +
    "array: true,\n" +
    "})\n" +
    "filterFields: CampaignFilterField[];\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: CampaignSortingField,\n" +
    "nullable: true,\n" +
    "})\n" +
    "sortingField: CampaignSortingField;\n" +
    "\n" +
    "@Field()\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@Field()\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/socialProfile.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "Entity,\n" +
    "Index,\n" +
    "ManyToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "import { ProjectVerificationForm } from './projectVerificationForm';\n" +
    "\n" +
    "export const SOCIAL_NETWORKS = {\n" +
    "FACEBOOK: 'facebook',\n" +
    "TWITTER: 'twitter',\n" +
    "INSTAGRAM: 'instagram',\n" +
    "YOUTUBE: 'youtube',\n" +
    "LINKEDIN: 'linkedin',\n" +
    "DISCORD: 'discord',\n" +
    "GOOGLE: 'google',\n" +
    "};\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Index(['socialNetworkId', 'socialNetwork'])\n" +
    "export class SocialProfile extends BaseEntity {\n" +
    "/**\n" +
    "   * @see {@link https://github.com/Giveth/giveth-dapps-v2/issues/711#issuecomment-1128435255}\n" +
    "   */\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project, { eager: true })\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId((socialProfile: SocialProfile) => socialProfile.project)\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "user: User;\n" +
    "@RelationId((socialProfile: SocialProfile) => socialProfile.user)\n" +
    "userId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => ProjectVerificationForm)\n" +
    "@ManyToOne(_type => ProjectVerificationForm)\n" +
    "projectVerificationForm: ProjectVerificationForm;\n" +
    "@RelationId(\n" +
    "(socialProfile: SocialProfile) => socialProfile.projectVerificationForm,\n" +
    ")\n" +
    "projectVerificationFormId: number;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "socialNetworkId: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "name?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "link?: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "socialNetwork: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { default: false })\n" +
    "isVerified: boolean;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/powerRound.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ObjectType } from 'type-graphql';\n" +
    "import { Column, Entity, BaseEntity, PrimaryColumn, Check } from 'typeorm';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Check('\"id\"')\n" +
    "export class PowerRound extends BaseEntity {\n" +
    "@Field(_type => Boolean)\n" +
    "@PrimaryColumn()\n" +
    "id: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ type: 'integer' })\n" +
    "round: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/projectSocialMedia.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "Entity,\n" +
    "Index,\n" +
    "ManyToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "} from 'typeorm';\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "import { ProjectSocialMediaType } from '../types/projectSocialMediaType';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ProjectSocialMedia extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Field(_type => String)\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: ProjectSocialMediaType,\n" +
    "})\n" +
    "type: ProjectSocialMediaType;\n" +
    "\n" +
    "@Index()\n" +
    "@Field()\n" +
    "@Column()\n" +
    "link: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project)\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId((relatedAddress: ProjectSocialMedia) => relatedAddress.project)\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "user: User;\n" +
    "\n" +
    "@RelationId((relatedAddress: ProjectSocialMedia) => relatedAddress.user)\n" +
    "@Column({ nullable: true })\n" +
    "userId: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/projectStatusHistory.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "ManyToOne,\n" +
    "RelationId,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { ProjectStatus } from './projectStatus';\n" +
    "import { ProjectStatusReason } from './projectStatusReason';\n" +
    "import { User } from './user';\n" +
    "\n" +
    "export const HISTORY_DESCRIPTIONS = {\n" +
    "CHANGED_TO_VERIFIED: 'Changed to verified',\n" +
    "CHANGED_TO_UNVERIFIED: 'Changed to unverified',\n" +
    "CHANGED_TO_LISTED: 'Changed to listed',\n" +
    "CHANGED_TO_UNVERIFIED_BY_CRONJOB: 'Changed to unverified automatically',\n" +
    "CHANGED_TO_UNLISTED: 'Changed to unlisted',\n" +
    "HAS_BEEN_EDITED: 'Has been edited',\n" +
    "};\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ProjectStatusHistory extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project)\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId(\n" +
    "(projectStatusHistory: ProjectStatusHistory) =>\n" +
    "projectStatusHistory.project,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field(_type => ProjectStatus)\n" +
    "@ManyToOne(_type => ProjectStatus)\n" +
    "status: ProjectStatus;\n" +
    "\n" +
    "@RelationId(\n" +
    "(projectStatusHistory: ProjectStatusHistory) => projectStatusHistory.status,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "statusId: number;\n" +
    "\n" +
    "@Field(_type => ProjectStatus)\n" +
    "@ManyToOne(_type => ProjectStatus)\n" +
    "prevStatus?: ProjectStatus;\n" +
    "\n" +
    "@RelationId(\n" +
    "(projectStatusHistory: ProjectStatusHistory) =>\n" +
    "projectStatusHistory.prevStatus,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "prevStatusId: number;\n" +
    "\n" +
    "@Field(_type => ProjectStatusReason)\n" +
    "@ManyToOne(_type => ProjectStatusReason)\n" +
    "reason?: ProjectStatusReason;\n" +
    "\n" +
    "@RelationId(\n" +
    "(projectStatusHistory: ProjectStatusHistory) => projectStatusHistory.reason,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "reasonId: number;\n" +
    "\n" +
    "@Field(_type => User)\n" +
    "@ManyToOne(_type => User)\n" +
    "user?: User;\n" +
    "\n" +
    "@RelationId(\n" +
    "(projectStatusHistory: ProjectStatusHistory) => projectStatusHistory.user,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "userId: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "description?: string;\n" +
    "\n" +
    "@Field(_type => Date)\n" +
    "@Column()\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/powerBalanceSnapshot.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "Index,\n" +
    "RelationId,\n" +
    "ManyToOne,\n" +
    "} from 'typeorm';\n" +
    "import { PowerSnapshot } from './powerSnapshot';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Index(['userId', 'powerSnapshotId'], { unique: true })\n" +
    "// To improve the performance of the query, we need to add the following index\n" +
    "@Index(['powerSnapshotId', 'userId'], { where: 'balance IS NULL' })\n" +
    "export class PowerBalanceSnapshot extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@Column()\n" +
    "userId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('float', { nullable: true })\n" +
    "balance: number;\n" +
    "\n" +
    "@Field(_type => ID)\n" +
    "@RelationId(\n" +
    "(powerBalanceSnapshot: PowerBalanceSnapshot) =>\n" +
    "powerBalanceSnapshot.powerSnapshot,\n" +
    ")\n" +
    "@Column()\n" +
    "powerSnapshotId: number;\n" +
    "\n" +
    "@Field(_type => PowerSnapshot, { nullable: false })\n" +
    "@ManyToOne(_type => PowerSnapshot, { nullable: false })\n" +
    "powerSnapshot: PowerSnapshot;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/projectStatus.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "OneToMany,\n" +
    "Index,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { ProjectStatusReason } from './projectStatusReason';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ProjectStatus extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text', { unique: true })\n" +
    "symbol: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field()\n" +
    "@Column({ nullable: true })\n" +
    "name: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true })\n" +
    "description: string;\n" +
    "\n" +
    "@Field(_type => [Project], { nullable: true })\n" +
    "@OneToMany(_type => Project, project => project.status)\n" +
    "projects?: Project[];\n" +
    "\n" +
    "@Field(_type => [ProjectStatusReason], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => ProjectStatusReason,\n" +
    "projectStatusReason => projectStatusReason.status,\n" +
    ")\n" +
    "reasons?: ProjectStatusReason[];\n" +
    "\n" +
    "@Field(_type => [ProjectStatusReason], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => ProjectStatusReason,\n" +
    "projectStatusReason => projectStatusReason.status,\n" +
    ")\n" +
    "projectStatusHistories?: ProjectStatusReason[];\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/broadcastNotification.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field } from 'type-graphql';\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "Entity,\n" +
    "ManyToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "} from 'typeorm';\n" +
    "import { User } from './user';\n" +
    "\n" +
    "export enum BROAD_CAST_NOTIFICATION_STATUS {\n" +
    "PENDING = 'pending',\n" +
    "SUCCESS = 'success',\n" +
    "FAILED = 'failed',\n" +
    "}\n" +
    "\n" +
    "@Entity()\n" +
    "export default class BroadcastNotification extends BaseEntity {\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Column({ nullable: true, default: BROAD_CAST_NOTIFICATION_STATUS.PENDING })\n" +
    "status?: string;\n" +
    "\n" +
    "@Column()\n" +
    "html: string;\n" +
    "\n" +
    "@Column()\n" +
    "title: string;\n" +
    "\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "adminUser: User;\n" +
    "@RelationId(\n" +
    "(broadcastNotification: BroadcastNotification) =>\n" +
    "broadcastNotification.adminUser,\n" +
    ")\n" +
    "adminUserId: number;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/powerBoosting.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "Entity,\n" +
    "Index,\n" +
    "ManyToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Field, Float, ID, ObjectType } from 'type-graphql';\n" +
    "import { Max, Min, IsNumber } from 'class-validator';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "import { ColumnNumericTransformer } from '../utils/entities';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Index(['projectId', 'userId'], { unique: true })\n" +
    "export class PowerBoosting extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project, { eager: true })\n" +
    "project: Project;\n" +
    "\n" +
    "@Index()\n" +
    "@RelationId((powerBoosting: PowerBoosting) => powerBoosting.project)\n" +
    "@Column({ nullable: false })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field(_type => User)\n" +
    "@ManyToOne(_type => User, { eager: true })\n" +
    "user: User;\n" +
    "\n" +
    "@Index()\n" +
    "@RelationId((powerBoosting: PowerBoosting) => powerBoosting.user)\n" +
    "@Column({ nullable: false })\n" +
    "userId: number;\n" +
    "\n" +
    "@Field(_type => Float)\n" +
    "@Column('numeric', {\n" +
    "precision: 5, // 100.00\n" +
    "scale: 2,\n" +
    "transformer: new ColumnNumericTransformer(),\n" +
    "})\n" +
    "// https://orkhan.gitbook.io/typeorm/docs/validation\n" +
    "@IsNumber()\n" +
    "@Min(0)\n" +
    "@Max(100)\n" +
    "percentage: number;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "@Field()\n" +
    "createdAt: Date;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "@Field()\n" +
    "updatedAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/organization.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "ManyToMany,\n" +
    "OneToMany,\n" +
    "JoinTable,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { Token } from './token';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class Organization extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text')\n" +
    "name: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { default: false })\n" +
    "disableNotifications: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { default: false })\n" +
    "disableRecurringDonations: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { default: false })\n" +
    "disableUpdateEnforcement: boolean;\n" +
    "\n" +
    "// It should not change during the time, because we are assuming they are readonly\n" +
    "@Field()\n" +
    "@Column('text')\n" +
    "label: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text', { nullable: true })\n" +
    "website?: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('boolean', { nullable: true, default: false })\n" +
    "supportCustomTokens?: boolean;\n" +
    "\n" +
    "@Field(_type => [Project], { nullable: true })\n" +
    "@OneToMany(_type => Project, project => project.organization)\n" +
    "projects?: Project[];\n" +
    "\n" +
    "@Field(_type => [Token], { nullable: true })\n" +
    "@ManyToMany(_type => Token, token => token.organizations)\n" +
    "@JoinTable()\n" +
    "tokens: Token[];\n" +
    "}\n" +
    "\n" +
    "export const ORGANIZATION_LABELS = {\n" +
    "GIVETH: 'giveth',\n" +
    "TRACE: 'trace',\n" +
    "CHANGE: 'change',\n" +
    "// We removed giving blocks projects except the ones that received donations\n" +
    "// GIVING_BLOCK: 'givingBlock',\n" +
    "ENDAOMENT: 'endaoment',\n" +
    "};\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/bankAccount.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, Float, ID, ObjectType } from 'type-graphql';\n" +
    "import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';\n" +
    "\n" +
    "@ObjectType()\n" +
    "@Entity()\n" +
    "export class BankAccount extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "projectId: number;\n" +
    "\n" +
    "@Column()\n" +
    "productId: string;\n" +
    "\n" +
    "@Column()\n" +
    "bankName: string;\n" +
    "\n" +
    "@Column()\n" +
    "accountHolderName: string;\n" +
    "\n" +
    "@Column()\n" +
    "accountHolderType: string;\n" +
    "\n" +
    "@Column()\n" +
    "country: string;\n" +
    "\n" +
    "@Column()\n" +
    "currency: string;\n" +
    "\n" +
    "@Column()\n" +
    "accountId: string;\n" +
    "\n" +
    "@Column()\n" +
    "fingerprint: string;\n" +
    "\n" +
    "@Column()\n" +
    "last4: string;\n" +
    "\n" +
    "@Column()\n" +
    "routingNumber: string;\n" +
    "\n" +
    "@Column()\n" +
    "status: string;\n" +
    "}\n" +
    "\n" +
    "@ObjectType()\n" +
    "@Entity()\n" +
    "export class StripeTransaction extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "status: string;\n" +
    "\n" +
    "@Column({ nullable: true })\n" +
    "@Field({ nullable: true })\n" +
    "sessionId?: string;\n" +
    "\n" +
    "@Column({ nullable: true })\n" +
    "@Field({ nullable: true })\n" +
    "donorCustomerId: string;\n" +
    "\n" +
    "@Column({ nullable: true })\n" +
    "@Field({ nullable: true })\n" +
    "donorName: string;\n" +
    "\n" +
    "@Column({ nullable: true })\n" +
    "@Field({ nullable: true })\n" +
    "donorEmail: string;\n" +
    "\n" +
    "@Column()\n" +
    "@Field()\n" +
    "createdAt: Date;\n" +
    "\n" +
    "@Column({ type: 'float', nullable: true })\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "amount: number;\n" +
    "\n" +
    "@Column({ nullable: true })\n" +
    "@Field({ nullable: true })\n" +
    "donateToGiveth: boolean;\n" +
    "\n" +
    "@Column({ default: false })\n" +
    "@Field()\n" +
    "anonymous: boolean;\n" +
    "\n" +
    "@Column()\n" +
    "@Field()\n" +
    "currency: string;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/draftRecurringDonation.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "Index,\n" +
    "CreateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { ChainType } from '../types/network';\n" +
    "\n" +
    "export const DRAFT_RECURRING_DONATION_STATUS = {\n" +
    "PENDING: 'pending',\n" +
    "MATCHED: 'matched',\n" +
    "FAILED: 'failed',\n" +
    "};\n" +
    "\n" +
    "export const RECURRING_DONATION_ORIGINS = {\n" +
    "DRAFT_RECURRING_DONATION_MATCHING: 'DraftRecurringDonationMatching',\n" +
    "};\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "// To mark the draft recurring donation as matched, when the recurringDonation is created in RecurringDonationResolver\n" +
    "export class DraftRecurringDonation extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: false })\n" +
    "networkId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: false })\n" +
    "flowRate: string;\n" +
    "\n" +
    "@Field(_type => String)\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: ChainType,\n" +
    "default: ChainType.EVM,\n" +
    "})\n" +
    "chainType: ChainType;\n" +
    "\n" +
    "@Index()\n" +
    "@Field()\n" +
    "@Column({ nullable: false })\n" +
    "currency: string;\n" +
    "\n" +
    "@Column({ nullable: true, default: false })\n" +
    "@Field({ nullable: true })\n" +
    "isBatch: boolean;\n" +
    "\n" +
    "@Column({ nullable: true, default: false })\n" +
    "@Field({ nullable: true })\n" +
    "anonymous: boolean;\n" +
    "\n" +
    "@Column({ nullable: true, default: false })\n" +
    "@Field({ nullable: true })\n" +
    "// When creating a draft recurring donation, the user can choose to update an existing recurring donation\n" +
    "// This flag is used to determine if the draft recurring donation is for update\n" +
    "isForUpdate: boolean;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true })\n" +
    "@Index({ where: `status = '${DRAFT_RECURRING_DONATION_STATUS.PENDING}'` })\n" +
    "donorId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: DRAFT_RECURRING_DONATION_STATUS,\n" +
    "default: DRAFT_RECURRING_DONATION_STATUS.PENDING,\n" +
    "})\n" +
    "@Index({ where: `status = '${DRAFT_RECURRING_DONATION_STATUS.PENDING}'` })\n" +
    "status: string;\n" +
    "@Field()\n" +
    "@Column({ nullable: true })\n" +
    "matchedRecurringDonationId?: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "origin: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "errorMessage?: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Date)\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/projectFraud.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "ManyToOne,\n" +
    "RelationId,\n" +
    "BaseEntity,\n" +
    "Unique,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { QfRound } from './qfRound';\n" +
    "\n" +
    "@ObjectType()\n" +
    "@Entity()\n" +
    "@Unique(['projectId', 'qfRoundId'])\n" +
    "export class ProjectFraud extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project, { eager: true })\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId((projectFraud: ProjectFraud) => projectFraud.project)\n" +
    "@Column()\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field(_type => QfRound)\n" +
    "@ManyToOne(_type => QfRound, { eager: true })\n" +
    "qfRound: QfRound;\n" +
    "\n" +
    "@RelationId((projectFraud: ProjectFraud) => projectFraud.qfRound)\n" +
    "@Column()\n" +
    "qfRoundId: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/ProjectActualMatchingView.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "Column,\n" +
    "PrimaryColumn,\n" +
    "BaseEntity,\n" +
    "ViewEntity,\n" +
    "ManyToOne,\n" +
    "ViewColumn,\n" +
    "JoinColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "\n" +
    "@ViewEntity('project_actual_matching_view', { synchronize: false })\n" +
    "@ObjectType()\n" +
    "export class ProjectActualMatchingView extends BaseEntity {\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project, project => project.projectEstimatedMatchingView)\n" +
    "@JoinColumn({ referencedColumnName: 'id' })\n" +
    "project: Project;\n" +
    "\n" +
    "@Field()\n" +
    "@ViewColumn()\n" +
    "@PrimaryColumn()\n" +
    "projectId: number;\n" +
    "\n" +
    "// QF Round ID associated with the donations\n" +
    "@ViewColumn()\n" +
    "@Field()\n" +
    "@PrimaryColumn()\n" +
    "qfRoundId: number;\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Column({ nullable: true })\n" +
    "email?: string;\n" +
    "\n" +
    "// Sum of the square root of the value in USD of the donations\n" +
    "@ViewColumn()\n" +
    "@Column('double precision')\n" +
    "donationsSqrtRootSum: number;\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Column('double precision')\n" +
    "donationsSqrtRootSumSquared: number;\n" +
    "\n" +
    "// Count of unique donations per user per project per QF round\n" +
    "@ViewColumn()\n" +
    "@Column('int')\n" +
    "uniqueQualifiedDonors: number;\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Column('double precision')\n" +
    "allUsdReceivedAfterSybilsAnalysis: number;\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Column('double precision')\n" +
    "allUsdReceived: number;\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Column({ type: 'double precision', array: true })\n" +
    "totalValuesOfUserDonationsAfterAnalysis: number[];\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Column({ type: 'int', array: true })\n" +
    "donationIdsBeforeAnalysis: number[];\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Column({ type: 'int', array: true })\n" +
    "donationIdsAfterAnalysis: number[];\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Column({ type: 'int', array: true })\n" +
    "uniqueUserIdsAfterAnalysis: number[];\n" +
    "\n" +
    "// Count of unique donors who have verified donations for each project\n" +
    "@ViewColumn()\n" +
    "@Column('int')\n" +
    "totalDonors: number;\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Column()\n" +
    "slug: string;\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Column()\n" +
    "title: string;\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Column()\n" +
    "networkAddresses: string;\n" +
    "\n" +
    "// We fill it ourself before sending data to google sheet, it's not a DB column\n" +
    "actualMatching: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/notificationPayload.ts`:\n" +
    "\n" +
    "```ts\n" +
    "export default interface NotificationPayload {\n" +
    "id: number;\n" +
    "message?: string;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/referredEvent.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "Entity,\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "BaseEntity,\n" +
    "RelationId,\n" +
    "OneToOne,\n" +
    "UpdateDateColumn,\n" +
    "CreateDateColumn,\n" +
    "JoinColumn,\n" +
    "} from 'typeorm';\n" +
    "import { User } from './user';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ReferredEvent extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Field(_type => Date, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "startTime?: Date;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "referrerId?: string;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: false })\n" +
    "@Column({ nullable: false, default: false })\n" +
    "isDonorLinkedToReferrer: boolean;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: false })\n" +
    "@Column({ nullable: false, default: false })\n" +
    "isDonorClickEventSent: boolean;\n" +
    "\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@OneToOne(_type => User, { nullable: true })\n" +
    "@JoinColumn()\n" +
    "user: User;\n" +
    "\n" +
    "@Field(_type => ID, { nullable: true })\n" +
    "@RelationId((referredEvent: ReferredEvent) => referredEvent.user)\n" +
    "@Column({ nullable: true })\n" +
    "userId: number;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/qfRoundHistory.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, Float, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "ManyToOne,\n" +
    "RelationId,\n" +
    "UpdateDateColumn,\n" +
    "CreateDateColumn,\n" +
    "Index,\n" +
    "Unique,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { QfRound } from './qfRound';\n" +
    "import {\n" +
    "findQfRoundById,\n" +
    "getQfRoundTotalSqrtRootSumSquared,\n" +
    "getProjectDonationsSqrtRootSum,\n" +
    "} from '../repositories/qfRoundRepository';\n" +
    "import { EstimatedMatching } from '../types/qfTypes';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "// Have one record per projectId and qfRoundId\n" +
    "@Unique(['projectId', 'qfRoundId'])\n" +
    "export class QfRoundHistory extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@ManyToOne(_type => Project)\n" +
    "project: Project;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => ID, { nullable: true })\n" +
    "@RelationId((qfRoundHistory: QfRoundHistory) => qfRoundHistory.project)\n" +
    "@Column()\n" +
    "projectId: number;\n" +
    "\n" +
    "@ManyToOne(_type => QfRound)\n" +
    "qfRound: QfRound;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => ID, { nullable: true })\n" +
    "@RelationId((qfRoundHistory: QfRoundHistory) => qfRoundHistory.qfRound)\n" +
    "@Column()\n" +
    "qfRoundId: number;\n" +
    "\n" +
    "@Field(_type => Number, { nullable: true })\n" +
    "@Column({ nullable: true, default: 0 })\n" +
    "uniqueDonors: number;\n" +
    "\n" +
    "@Field(_type => Number, { nullable: true })\n" +
    "@Column({ nullable: true, default: 0 })\n" +
    "donationsCount: number;\n" +
    "\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "@Column({ type: 'real', nullable: true, default: 0 })\n" +
    "raisedFundInUsd: number;\n" +
    "\n" +
    "// usd value of matching fund\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "@Column({ type: 'real', nullable: true, default: 0 })\n" +
    "matchingFund: number;\n" +
    "\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "@Column({ type: 'real', nullable: true })\n" +
    "matchingFundAmount?: number;\n" +
    "\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "@Column({ type: 'real', nullable: true })\n" +
    "matchingFundPriceUsd?: number;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "matchingFundCurrency?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "distributedFundTxHash: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "distributedFundNetwork: string;\n" +
    "\n" +
    "@Field(_type => Date, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "distributedFundTxDate: Date;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "\n" +
    "// In your main class\n" +
    "@Field(_type => EstimatedMatching, { nullable: true })\n" +
    "async estimatedMatching(): Promise<EstimatedMatching | null> {\n" +
    "const projectDonationsSqrtRootSum = await getProjectDonationsSqrtRootSum(\n" +
    "this.projectId,\n" +
    "this.qfRoundId,\n" +
    ");\n" +
    "\n" +
    "const allProjectsSum = await getQfRoundTotalSqrtRootSumSquared(\n" +
    "this.qfRoundId,\n" +
    ");\n" +
    "const qfRound = await findQfRoundById(this.qfRoundId);\n" +
    "\n" +
    "const matchingPool = qfRound!.allocatedFund;\n" +
    "\n" +
    "return {\n" +
    "projectDonationsSqrtRootSum,\n" +
    "allProjectsSum,\n" +
    "matchingPool,\n" +
    "};\n" +
    "}\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/token.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "ManyToMany,\n" +
    "Index,\n" +
    "} from 'typeorm';\n" +
    "import { Organization } from './organization';\n" +
    "import { ChainType } from '../types/network';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Index(['address', 'networkId'], { unique: true })\n" +
    "export class Token extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text')\n" +
    "name: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text')\n" +
    "symbol: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text')\n" +
    "address: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "// Some tokens like PAN, XNODE, CRV dont have price on coingecko for gnosis network, So frontend guys suggested\n" +
    "// add  mainnetAddress field for those tokens, then client can get price of these tokens in mainnet\n" +
    "mainnetAddress: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "networkId: number;\n" +
    "\n" +
    "@Field(_type => String)\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: ChainType,\n" +
    "default: ChainType.EVM,\n" +
    "})\n" +
    "chainType: ChainType;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "decimals: number;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "// 1 is the order with most priority, and null means it doesn't have any priority\n" +
    "order?: number;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column({ nullable: false, default: false })\n" +
    "isGivbackEligible: boolean;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column({ nullable: true, default: false })\n" +
    "isStableCoin: boolean;\n" +
    "\n" +
    "@Field(_type => Boolean)\n" +
    "@Column({ default: false })\n" +
    "isQR: boolean;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "// If we fill that, we will get price of this token from coingecko\n" +
    "coingeckoId: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "// If we fill that, we will get price of this token from cryptocompare\n" +
    "cryptoCompareId: string;\n" +
    "\n" +
    "@ManyToMany(_type => Organization, organization => organization.tokens, {\n" +
    "// make it true to show organizations in token page of adminjs panel\n" +
    "eager: true,\n" +
    "})\n" +
    "organizations: Organization[];\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/mainCategory.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "Entity,\n" +
    "OneToMany,\n" +
    "PrimaryGeneratedColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Category } from './category';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class MainCategory extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text', { unique: true })\n" +
    "title: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column('text', { unique: true })\n" +
    "slug: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "description: string;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "// ipfs link\n" +
    "banner: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ default: true })\n" +
    "isActive: boolean;\n" +
    "\n" +
    "@Field(_type => [Category], { nullable: true })\n" +
    "@OneToMany(_type => Category, category => category.mainCategory)\n" +
    "categories?: Category[];\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/featuredUpdate.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "Entity,\n" +
    "Index,\n" +
    "JoinColumn,\n" +
    "OneToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Int } from 'type-graphql/dist/scalars/aliases';\n" +
    "import { Project, ProjectUpdate } from './project';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class FeaturedUpdate extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Project)\n" +
    "@OneToOne(_type => Project)\n" +
    "@JoinColumn()\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId((featuredUpdate: FeaturedUpdate) => featuredUpdate.project)\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => ProjectUpdate)\n" +
    "@OneToOne(_type => ProjectUpdate)\n" +
    "@JoinColumn()\n" +
    "projectUpdate: ProjectUpdate;\n" +
    "\n" +
    "@RelationId((featuredUpdate: FeaturedUpdate) => featuredUpdate.projectUpdate)\n" +
    "@Column({ nullable: true })\n" +
    "projectUpdateId: number;\n" +
    "\n" +
    "@Field(_type => Int, { nullable: true })\n" +
    "@Column({ type: 'integer', nullable: true })\n" +
    "position: number;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/user.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, Float, ID, Int, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "Entity,\n" +
    "Index,\n" +
    "OneToMany,\n" +
    "OneToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { ProjStatus, ReviewStatus } from './project';\n" +
    "import { Donation, DONATION_STATUS } from './donation';\n" +
    "import { Reaction } from './reaction';\n" +
    "import { AccountVerification } from './accountVerification';\n" +
    "import { ProjectStatusHistory } from './projectStatusHistory';\n" +
    "import { ProjectVerificationForm } from './projectVerificationForm';\n" +
    "import { PowerBoosting } from './powerBoosting';\n" +
    "import { findPowerBoostingsCountByUserId } from '../repositories/powerBoostingRepository';\n" +
    "import { ReferredEvent } from './referredEvent';\n" +
    "import { RecurringDonation } from './recurringDonation';\n" +
    "import { NOTIFICATIONS_EVENT_NAMES } from '../analytics/analytics';\n" +
    "\n" +
    "export const publicSelectionFields = [\n" +
    "'user.id',\n" +
    "'user.walletAddress',\n" +
    "'user.name',\n" +
    "'user.firstName',\n" +
    "'user.lastName',\n" +
    "'user.url',\n" +
    "'user.avatar',\n" +
    "'user.totalDonated',\n" +
    "'user.totalReceived',\n" +
    "'user.passportScore',\n" +
    "'user.passportStamps',\n" +
    "'user.isEmailVerified',\n" +
    "];\n" +
    "\n" +
    "export enum UserRole {\n" +
    "// Normal users, not admin\n" +
    "RESTRICTED = 'restricted',\n" +
    "\n" +
    "ADMIN = 'admin',\n" +
    "OPERATOR = 'operator',\n" +
    "VERIFICATION_FORM_REVIEWER = 'reviewer',\n" +
    "CAMPAIGN_MANAGER = 'campaignManager',\n" +
    "QF_MANAGER = 'qfManager',\n" +
    "}\n" +
    "\n" +
    "export type UserStreamBalanceWarning =\n" +
    "| NOTIFICATIONS_EVENT_NAMES.SUPER_TOKENS_BALANCE_MONTH\n" +
    "| NOTIFICATIONS_EVENT_NAMES.SUPER_TOKENS_BALANCE_WEEK\n" +
    "| NOTIFICATIONS_EVENT_NAMES.SUPER_TOKENS_BALANCE_DEPLETED;\n" +
    "\n" +
    "@ObjectType()\n" +
    "@Entity()\n" +
    "export class User extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Column({\n" +
    "type: 'enum',\n" +
    "enum: UserRole,\n" +
    "default: UserRole.RESTRICTED,\n" +
    "})\n" +
    "role: UserRole;\n" +
    "\n" +
    "@Field(_type => [AccountVerification], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => AccountVerification,\n" +
    "accountVerification => accountVerification.user,\n" +
    ")\n" +
    "accountVerifications?: AccountVerification[];\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "email?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "firstName?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "lastName?: string;\n" +
    "\n" +
    "@Index('trgm_idx_user_name', { synchronize: false })\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "name?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true, unique: true })\n" +
    "walletAddress?: string;\n" +
    "\n" +
    "@Column({\n" +
    "type: 'json',\n" +
    "nullable: true,\n" +
    "})\n" +
    "streamBalanceWarning?: Record<string, UserStreamBalanceWarning | null>;\n" +
    "\n" +
    "@Column({ nullable: true })\n" +
    "password?: string;\n" +
    "\n" +
    "@Column({ nullable: true })\n" +
    "encryptedPassword?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "avatar?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "url?: string;\n" +
    "\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "@Column({ type: 'real', nullable: true, default: null })\n" +
    "passportScore?: number;\n" +
    "\n" +
    "@Field(_type => Number, { nullable: true })\n" +
    "@Column({ nullable: true, default: null })\n" +
    "passportStamps?: number;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "location?: string;\n" +
    "\n" +
    "@Column()\n" +
    "loginType: string;\n" +
    "\n" +
    "@Column({ nullable: true })\n" +
    "dId?: string;\n" +
    "\n" +
    "@Column('bool', { default: false })\n" +
    "confirmed: boolean;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "chainvineId?: string;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column('bool', { default: false })\n" +
    "wasReferred: boolean;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column('bool', { default: false })\n" +
    "isReferrer: boolean;\n" +
    "\n" +
    "@Field(() => ReferredEvent, { nullable: true })\n" +
    "@OneToOne(() => ReferredEvent, referredEvent => referredEvent.user, {\n" +
    "cascade: true,\n" +
    "})\n" +
    "referredEvent?: ReferredEvent;\n" +
    "\n" +
    "@Column('bool', { default: false })\n" +
    "segmentIdentified: boolean;\n" +
    "\n" +
    "// Admin Reviewing Forms\n" +
    "@Field(_type => [ProjectVerificationForm], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => ProjectVerificationForm,\n" +
    "projectVerificationForm => projectVerificationForm.reviewer,\n" +
    ")\n" +
    "projectVerificationForms?: ProjectVerificationForm[];\n" +
    "\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "@Column({ type: 'real', nullable: true, default: 0 })\n" +
    "totalDonated: number;\n" +
    "\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "@Column({ type: 'real', nullable: true, default: 0 })\n" +
    "totalReceived: number;\n" +
    "\n" +
    "@Field(_type => [ProjectStatusHistory], { nullable: true })\n" +
    "@OneToMany(\n" +
    "_type => ProjectStatusHistory,\n" +
    "projectStatusHistory => projectStatusHistory.user,\n" +
    ")\n" +
    "projectStatusHistories?: ProjectStatusHistory[];\n" +
    "\n" +
    "@Field(_type => [PowerBoosting], { nullable: true })\n" +
    "@OneToMany(_type => PowerBoosting, powerBoosting => powerBoosting.user)\n" +
    "powerBoostings?: PowerBoosting[];\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "\n" +
    "@Field(_type => Int, { nullable: true })\n" +
    "projectsCount?: number;\n" +
    "\n" +
    "@Field(_type => Float, { nullable: true })\n" +
    "activeQFMBDScore?: number;\n" +
    "\n" +
    "@Field(_type => Boolean, { nullable: true })\n" +
    "@Column('bool', { default: false })\n" +
    "isEmailVerified: boolean;\n" +
    "\n" +
    "@Column('varchar', { nullable: true, default: null })\n" +
    "emailVerificationCode?: string | null;\n" +
    "\n" +
    "@Field(_type => Int, { nullable: true })\n" +
    "async donationsCount() {\n" +
    "// Count for non-recurring donations\n" +
    "const nonRecurringDonationsCount = await Donation.createQueryBuilder(\n" +
    "'donation',\n" +
    ")\n" +
    ".where(`donation.\"userId\" = :userId`, { userId: this.id })\n" +
    ".andWhere(`donation.status = :status`, {\n" +
    "status: DONATION_STATUS.VERIFIED,\n" +
    "})\n" +
    ".andWhere(`donation.\"recurringDonationId\" IS NULL`)\n" +
    ".cache(\n" +
    "`user-donationsCount-normal-${this.id}`,\n" +
    "Number(process.env.USER_STATS_CACHE_TIME || 60000),\n" +
    ")\n" +
    ".getCount();\n" +
    "\n" +
    "// Count for recurring donations\n" +
    "const recurringDonationsCount = await RecurringDonation.createQueryBuilder(\n" +
    "'recurring_donation',\n" +
    ")\n" +
    ".where(`recurring_donation.\"donorId\" = :donorId`, { donorId: this.id })\n" +
    ".andWhere('recurring_donation.totalUsdStreamed > 0')\n" +
    ".cache(\n" +
    "`user-donationsCount-recurring-${this.id}`,\n" +
    "Number(process.env.USER_STATS_CACHE_TIME || 60000),\n" +
    ")\n" +
    ".getCount();\n" +
    "\n" +
    "// Sum of both counts\n" +
    "return nonRecurringDonationsCount + recurringDonationsCount;\n" +
    "}\n" +
    "\n" +
    "@Field(_type => Int, { nullable: true })\n" +
    "async likedProjectsCount() {\n" +
    "const likedProjectsCount = await Reaction.createQueryBuilder('reaction')\n" +
    ".innerJoinAndSelect('reaction.project', 'project')\n" +
    ".where('reaction.userId = :id', { id: this.id })\n" +
    ".andWhere(\n" +
    "`project.statusId = ${ProjStatus.active} AND project.reviewStatus = :reviewStatus`,\n" +
    "{ reviewStatus: ReviewStatus.Listed },\n" +
    ")\n" +
    ".cache(\n" +
    "`user-likedProjectsCount-recurring-${this.id}`,\n" +
    "Number(process.env.USER_STATS_CACHE_TIME || 60000),\n" +
    ")\n" +
    ".getCount();\n" +
    "\n" +
    "return likedProjectsCount;\n" +
    "}\n" +
    "\n" +
    "@Field(_type => Int, { nullable: true })\n" +
    "async boostedProjectsCount() {\n" +
    "return findPowerBoostingsCountByUserId(this.id);\n" +
    "}\n" +
    "\n" +
    "segmentUserId() {\n" +
    "return `givethId-${this.id}`;\n" +
    "}\n" +
    "}\n" +
    "\n" +
    "@ObjectType()\n" +
    "export class UserPublicData extends BaseEntity {\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "firstName?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "lastName?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "name?: string;\n" +
    "\n" +
    "@Field(_type => String, { nullable: true })\n" +
    "walletAddress?: string;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/accountVerification.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "ManyToOne,\n" +
    "RelationId,\n" +
    "Index,\n" +
    "CreateDateColumn,\n" +
    "UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { User } from './user';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class AccountVerification extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "platform: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field()\n" +
    "@Column()\n" +
    "dId: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "protocol: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "claim?: string;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "attestation?: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => User)\n" +
    "@ManyToOne(_type => User, { eager: true })\n" +
    "user: User;\n" +
    "\n" +
    "@RelationId(\n" +
    "(accountVerification: AccountVerification) => accountVerification.user,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "userId: number;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/sitemapUrl.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "Entity,\n" +
    "PrimaryGeneratedColumn,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Field, ObjectType } from 'type-graphql';\n" +
    "\n" +
    "@ObjectType()\n" +
    "export class SitemapUrlsObject {\n" +
    "@Field()\n" +
    "sitemapProjectsURL: string;\n" +
    "\n" +
    "@Field()\n" +
    "sitemapUsersURL: string;\n" +
    "\n" +
    "@Field()\n" +
    "sitemapQFRoundsURL: string;\n" +
    "}\n" +
    "\n" +
    "@ObjectType()\n" +
    "@Entity({ name: 'sitemap_url' })\n" +
    "export class SitemapUrl {\n" +
    "@Field()\n" +
    "@PrimaryGeneratedColumn()\n" +
    "id: number;\n" +
    "\n" +
    "@Field(() => SitemapUrlsObject)\n" +
    "@Column({ type: 'jsonb', nullable: false })\n" +
    "sitemap_urls: SitemapUrlsObject;\n" +
    "\n" +
    "@Field(() => Date)\n" +
    "@CreateDateColumn({ type: 'timestamp' })\n" +
    "created_at: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/project.test.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { assert } from 'chai';\n" +
    "import { Project, ProjectUpdate, ProjStatus } from './project';\n" +
    "import {\n" +
    "createProjectData,\n" +
    "saveProjectDirectlyToDb,\n" +
    "SEED_DATA,\n" +
    "} from '../../test/testUtils';\n" +
    "import { ProjectStatus } from './projectStatus';\n" +
    "import { ProjectStatusReason } from './projectStatusReason';\n" +
    "import { findOneProjectStatusHistoryByProjectId } from '../repositories/projectSatusHistoryRepository';\n" +
    "\n" +
    "describe(\n" +
    "'addProjectStatusHistoryRecord() test cases',\n" +
    "addProjectStatusHistoryRecord,\n" +
    ");\n" +
    "\n" +
    "describe('projectUpdate() test cases', projectUpdateTestCases);\n" +
    "\n" +
    "function projectUpdateTestCases() {\n" +
    "it('should update project updatedAt when a new update is added', async () => {\n" +
    "const project = await saveProjectDirectlyToDb(createProjectData());\n" +
    "const update = ProjectUpdate.create({\n" +
    "userId: project.adminUserId,\n" +
    "projectId: project.id,\n" +
    "content: 'content',\n" +
    "title: 'title',\n" +
    "createdAt: new Date(),\n" +
    "isMain: false,\n" +
    "});\n" +
    "await update.save();\n" +
    "assert.isTrue(true);\n" +
    "const updatedProject = (await Project.findOne({\n" +
    "where: { id: project.id },\n" +
    "})) as Project;\n" +
    "assert.isAbove(\n" +
    "updatedProject.updatedAt.getTime(),\n" +
    "project.updatedAt.getTime(),\n" +
    ");\n" +
    "});\n" +
    "}\n" +
    "\n" +
    "function addProjectStatusHistoryRecord() {\n" +
    "it('Should create a history entity without reason', async () => {\n" +
    "const project = await saveProjectDirectlyToDb(createProjectData());\n" +
    "const activeStatus = await ProjectStatus.findOne({\n" +
    "where: { id: ProjStatus.active },\n" +
    "});\n" +
    "const cancelStatus = await ProjectStatus.findOne({\n" +
    "where: {\n" +
    "id: ProjStatus.cancelled,\n" +
    "},\n" +
    "});\n" +
    "await Project.addProjectStatusHistoryRecord({\n" +
    "project,\n" +
    "status: cancelStatus as ProjectStatus,\n" +
    "prevStatus: activeStatus as ProjectStatus,\n" +
    "userId: SEED_DATA.ADMIN_USER.id,\n" +
    "});\n" +
    "const history = await findOneProjectStatusHistoryByProjectId(project.id);\n" +
    "assert.isOk(history);\n" +
    "assert.equal(history?.statusId, cancelStatus?.id);\n" +
    "assert.equal(history?.prevStatusId, activeStatus?.id);\n" +
    "assert.isNotOk(history?.reasonId);\n" +
    "});\n" +
    "it('Should create a history entity with reason', async () => {\n" +
    "const project = await saveProjectDirectlyToDb(createProjectData());\n" +
    "const [reason] = await ProjectStatusReason.find({ take: 1 });\n" +
    "const activeStatus = await ProjectStatus.findOne({\n" +
    "where: { id: ProjStatus.active },\n" +
    "});\n" +
    "const cancelStatus = await ProjectStatus.findOne({\n" +
    "where: {\n" +
    "id: ProjStatus.deactive,\n" +
    "},\n" +
    "});\n" +
    "await Project.addProjectStatusHistoryRecord({\n" +
    "project,\n" +
    "status: cancelStatus as ProjectStatus,\n" +
    "prevStatus: activeStatus as ProjectStatus,\n" +
    "reasonId: reason?.id,\n" +
    "userId: SEED_DATA.ADMIN_USER.id,\n" +
    "});\n" +
    "const history = await findOneProjectStatusHistoryByProjectId(project.id);\n" +
    "assert.isOk(history);\n" +
    "assert.equal(history?.statusId, cancelStatus?.id);\n" +
    "assert.equal(history?.prevStatusId, activeStatus?.id);\n" +
    "assert.equal(history?.reasonId, reason?.id);\n" +
    "});\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/thirdPartyProjectImport.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "Column,\n" +
    "Entity,\n" +
    "BaseEntity,\n" +
    "PrimaryGeneratedColumn,\n" +
    "ManyToOne,\n" +
    "RelationId,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "\n" +
    "// only purpose of this entity is to serve as a custom page in AdminJs\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ThirdPartyProjectImport extends BaseEntity {\n" +
    "// required always for entities\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "// change logic in adminJs based on string\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "thirdPartyAPI: string;\n" +
    "\n" +
    "// searchTerm\n" +
    "@Field({ nullable: true })\n" +
    "@Column({ nullable: true })\n" +
    "projectName: string;\n" +
    "\n" +
    "// History of who exported\n" +
    "@Field(_type => User)\n" +
    "@ManyToOne(_type => User)\n" +
    "user?: User;\n" +
    "\n" +
    "@RelationId(\n" +
    "(thirdPartyProjectImport: ThirdPartyProjectImport) =>\n" +
    "thirdPartyProjectImport.user,\n" +
    ")\n" +
    "userId: number;\n" +
    "\n" +
    "// Link to project\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project)\n" +
    "project?: Project;\n" +
    "\n" +
    "@RelationId(\n" +
    "(thirdPartyProjectImport: ThirdPartyProjectImport) =>\n" +
    "thirdPartyProjectImport.project,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/ProjectGivbackRankView.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "OneToOne,\n" +
    "ViewColumn,\n" +
    "ViewEntity,\n" +
    "JoinColumn,\n" +
    "RelationId,\n" +
    "BaseEntity,\n" +
    "PrimaryColumn,\n" +
    "Column,\n" +
    "Index,\n" +
    "} from 'typeorm';\n" +
    "import { Field, Float, Int, ObjectType } from 'type-graphql';\n" +
    "import { Project } from '../entities/project';\n" +
    "import { ColumnNumericTransformer } from '../utils/entities';\n" +
    "\n" +
    "@ViewEntity('project_givback_rank_view', { synchronize: false })\n" +
    "@Index('project_givback_rank_view_project_id_unique', ['projectId', 'round'], {\n" +
    "unique: true,\n" +
    "})\n" +
    "// It's similar to ProjectPowerView, but with a small difference that it uses a different view\n" +
    "// That just includes project with isGivbackEligible = true\n" +
    "@ObjectType()\n" +
    "export class ProjectGivbackRankView extends BaseEntity {\n" +
    "@Field()\n" +
    "@ViewColumn()\n" +
    "@PrimaryColumn()\n" +
    "@RelationId(\n" +
    "(projectGivbackRankView: ProjectGivbackRankView) =>\n" +
    "projectGivbackRankView.project,\n" +
    ")\n" +
    "projectId: number;\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Field(_type => Float)\n" +
    "@Column('numeric', {\n" +
    "scale: 2,\n" +
    "transformer: new ColumnNumericTransformer(),\n" +
    "})\n" +
    "totalPower: number;\n" +
    "\n" +
    "@Field(_type => Project)\n" +
    "@OneToOne(_type => Project, project => project.projectPower)\n" +
    "@JoinColumn({ referencedColumnName: 'id' })\n" +
    "project: Project;\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Field(_type => Int)\n" +
    "powerRank: number;\n" +
    "\n" +
    "@ViewColumn()\n" +
    "@Field(_type => Int)\n" +
    "round: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/previousRoundRank.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "Entity,\n" +
    "Index,\n" +
    "ManyToOne,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "Unique,\n" +
    "UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import { Project } from './project';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Unique(['round', 'project'])\n" +
    "export class PreviousRoundRank extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project)\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId(\n" +
    "(previousRoundRank: PreviousRoundRank) => previousRoundRank.project,\n" +
    ")\n" +
    "@Column()\n" +
    "projectId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "round: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column()\n" +
    "rank: number;\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/entities/recurringDonation.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "BaseEntity,\n" +
    "Column,\n" +
    "CreateDateColumn,\n" +
    "Entity,\n" +
    "Index,\n" +
    "ManyToOne,\n" +
    "OneToMany,\n" +
    "PrimaryGeneratedColumn,\n" +
    "RelationId,\n" +
    "Unique,\n" +
    "UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "import { AnchorContractAddress } from './anchorContractAddress';\n" +
    "import { Donation } from './donation';\n" +
    "\n" +
    "export const RECURRING_DONATION_STATUS = {\n" +
    "PENDING: 'pending',\n" +
    "VERIFIED: 'verified',\n" +
    "ENDED: 'ended',\n" +
    "FAILED: 'failed',\n" +
    "ACTIVE: 'active',\n" +
    "};\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Unique(['txHash', 'networkId', 'project'])\n" +
    "// TODO entity is not completed\n" +
    "export class RecurringDonation extends BaseEntity {\n" +
    "@Field(_type => ID)\n" +
    "@PrimaryGeneratedColumn()\n" +
    "readonly id: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: false })\n" +
    "networkId: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true, default: 0, type: 'real' })\n" +
    "amountStreamed?: number;\n" +
    "\n" +
    "@Field()\n" +
    "@Column({ nullable: true, default: 0, type: 'real' })\n" +
    "totalUsdStreamed?: number;\n" +
    "\n" +
    "// per second\n" +
    "@Field()\n" +
    "@Column({ nullable: false })\n" +
    "flowRate: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field()\n" +
    "@Column({ nullable: false })\n" +
    "txHash: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field()\n" +
    "@Column({ nullable: false })\n" +
    "currency: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field()\n" +
    "@Column({ nullable: false, default: 'pending' })\n" +
    "status: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => Project)\n" +
    "@ManyToOne(_type => Project)\n" +
    "project: Project;\n" +
    "\n" +
    "@RelationId(\n" +
    "(recurringDonation: RecurringDonation) => recurringDonation.project,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "projectId: number;\n" +
    "\n" +
    "@Column({ nullable: true, default: false })\n" +
    "@Field({ nullable: true })\n" +
    "finished: boolean;\n" +
    "\n" +
    "@Column({ nullable: true, default: false })\n" +
    "@Field({ nullable: true })\n" +
    "isArchived: boolean;\n" +
    "\n" +
    "@Column({ nullable: true, default: false })\n" +
    "@Field({ nullable: true })\n" +
    "isBatch: boolean;\n" +
    "\n" +
    "@Column({ nullable: true, default: false })\n" +
    "@Field({ nullable: true })\n" +
    "anonymous: boolean;\n" +
    "\n" +
    "@Field({ nullable: true })\n" +
    "@Column('text', { nullable: true })\n" +
    "origin: string;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => AnchorContractAddress)\n" +
    "@ManyToOne(_type => AnchorContractAddress, { eager: true })\n" +
    "anchorContractAddress: AnchorContractAddress;\n" +
    "\n" +
    "@RelationId(\n" +
    "(recurringDonation: RecurringDonation) =>\n" +
    "recurringDonation.anchorContractAddress,\n" +
    ")\n" +
    "@Column({ nullable: true })\n" +
    "anchorContractAddressId: number;\n" +
    "\n" +
    "@Index()\n" +
    "@Field(_type => User, { nullable: true })\n" +
    "@ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "donor: User;\n" +
    "\n" +
    "@RelationId((recurringDonation: RecurringDonation) => recurringDonation.donor)\n" +
    "@Column({ nullable: true })\n" +
    "donorId: number;\n" +
    "\n" +
    "@Field(_type => [Donation], { nullable: true })\n" +
    "@OneToMany(_type => Donation, donation => donation.recurringDonation)\n" +
    "donations?: Donation[];\n" +
    "\n" +
    "@UpdateDateColumn()\n" +
    "@Field()\n" +
    "updatedAt: Date;\n" +
    "\n" +
    "@CreateDateColumn()\n" +
    "@Field()\n" +
    "createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```"
+ "\n" + "according to the typeorm entities above, send me only raw SQL query (without any description) to fetch below request:"
+ "\n" + "{{sqlQuery}}"
+ "\n" + "columns name like `projectId` in the `donation` table is case-sensitive and needs to be enclosed in double quotes to be recognized correctly by PostgreSQL, so make sure to use double quotes for column names in the SQL query."
+ "\n" + "please pay attention to the column names in the entities above before writing queries, for example in `project` table we have `creationDate` and we don't have `createdAt` column."
+ "\n" + "please change the table names in the entities above before writing queries, table names in Postgres and Typeorm are different, for example `qfRound` table in Typeorm is `qf_round` in Postgres and `projectStatus` table in Typeorm is `project_status` in Postgres."
+ "\n" + "NOTE: send only the SQL query without any description."

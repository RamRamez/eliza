export const mainGivethEntitiesPrompt = "Project Path: agentEntities\n" +
    "\n" +
    "Source Tree:\n" +
    "\n" +
    "```\n" +
    "agentEntities\n" +
    "├── project.ts\n" +
    "├── category.ts\n" +
    "├── projectStatusReason.ts\n" +
    "├── projectAddress.ts\n" +
    "├── donation.ts\n" +
    "├── qfRound.ts\n" +
    "├── projectSocialMedia.ts\n" +
    "├── projectStatus.ts\n" +
    "├── token.ts\n" +
    "├── mainCategory.ts\n" +
    "├── user.ts\n" +
    "└── recurringDonation.ts\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/project.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, Float, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "  AfterInsert,\n" +
    "  AfterUpdate,\n" +
    "  BeforeUpdate,\n" +
    "  BeforeInsert,\n" +
    "  BaseEntity,\n" +
    "  BeforeRemove,\n" +
    "  Column,\n" +
    "  Entity,\n" +
    "  Index,\n" +
    "  LessThan,\n" +
    "  ManyToMany,\n" +
    "  ManyToOne,\n" +
    "  OneToMany,\n" +
    "  OneToOne,\n" +
    "  PrimaryGeneratedColumn,\n" +
    "  RelationId,\n" +
    "  JoinTable,\n" +
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
    "import { findUserById } from '../repositories/userRepository';\n" +
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
    "  findActiveQfRound,\n" +
    "  getProjectDonationsSqrtRootSum,\n" +
    "  getQfRoundTotalSqrtRootSumSquared,\n" +
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
    "  rejected = 1,\n" +
    "  pending = 2,\n" +
    "  clarification = 3,\n" +
    "  verification = 4,\n" +
    "  active = 5,\n" +
    "  deactive = 6,\n" +
    "  cancelled = 7,\n" +
    "  drafted = 8,\n" +
    "}\n" +
    "\n" +
    "export enum ReviewStatus {\n" +
    "  NotReviewed = 'Not Reviewed',\n" +
    "  Listed = 'Listed',\n" +
    "  NotListed = 'Not Listed',\n" +
    "}\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class Project extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  readonly id: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column()\n" +
    "  title: string;\n" +
    "\n" +
    "  @Index({ unique: true })\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  slug?: string;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => [String], { nullable: true })\n" +
    "  @Column('text', { array: true, default: '{}' })\n" +
    "  slugHistory?: string[];\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  description?: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  descriptionSummary?: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  traceCampaignId?: string;\n" +
    "\n" +
    "  @Index({ unique: true, where: '\"givingBlocksId\" IS NOT NULL' })\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ default: null, nullable: true })\n" +
    "  givingBlocksId?: string;\n" +
    "\n" +
    "  @Index({ unique: true, where: '\"changeId\" IS NOT NULL' })\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ default: null, nullable: true })\n" +
    "  changeId?: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ default: null, nullable: true })\n" +
    "  website?: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ default: null, nullable: true })\n" +
    "  youtube?: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  creationDate: Date;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  updatedAt: Date;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  latestUpdateCreationDate: Date;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  coOrdinates?: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  image?: string;\n" +
    "\n" +
    "  @Index('trgm_idx_project_impact_location', { synchronize: false })\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  impactLocation?: string;\n" +
    "\n" +
    "  @Field(_type => [Category], { nullable: true })\n" +
    "  @ManyToMany(_type => Category, category => category.projects, {\n" +
    "    nullable: true,\n" +
    "  })\n" +
    "  @JoinTable()\n" +
    "  categories: Category[];\n" +
    "\n" +
    "  @Field(_type => [QfRound], { nullable: true })\n" +
    "  @ManyToMany(_type => QfRound, qfRound => qfRound.projects, {\n" +
    "    nullable: true,\n" +
    "  })\n" +
    "  @JoinTable()\n" +
    "  qfRounds: QfRound[];\n" +
    "\n" +
    "  @Field(_type => Float, { nullable: true })\n" +
    "  @Column('float', { nullable: true })\n" +
    "  balance: number = 0;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  stripeAccountId?: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ unique: true, nullable: true })\n" +
    "  walletAddress?: string;\n" +
    "\n" +
    "  @Field(_type => Boolean)\n" +
    "  @Column()\n" +
    "  verified: boolean;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  verificationStatus?: string | null;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: true })\n" +
    "  @Column({ default: false })\n" +
    "  isImported: boolean;\n" +
    "\n" +
    "  @Field(_type => Boolean)\n" +
    "  @Column()\n" +
    "  giveBacks: boolean;\n" +
    "\n" +
    "  @Field(_type => [Donation], { nullable: true })\n" +
    "  @OneToMany(_type => Donation, donation => donation.project)\n" +
    "  donations?: Donation[];\n" +
    "\n" +
    "  @Field(_type => Float, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  qualityScore: number = 0;\n" +
    "\n" +
    "  @Field(_type => [ProjectContacts], { nullable: true })\n" +
    "  @Column('jsonb', { nullable: true })\n" +
    "  contacts: ProjectContacts[];\n" +
    "\n" +
    "  @Field(() => [Reaction], { nullable: true })\n" +
    "  @OneToMany(_type => Reaction, reaction => reaction.project)\n" +
    "  reactions?: Reaction[];\n" +
    "\n" +
    "  @Field(_type => [ProjectAddress], { nullable: true })\n" +
    "  @OneToMany(\n" +
    "    _type => ProjectAddress,\n" +
    "    projectAddress => projectAddress.project,\n" +
    "    {\n" +
    "      eager: true,\n" +
    "    },\n" +
    "  )\n" +
    "  addresses?: ProjectAddress[];\n" +
    "\n" +
    "  @Field(_type => [ProjectSocialMedia], { nullable: true })\n" +
    "  @OneToMany(_type => ProjectSocialMedia, socialMedia => socialMedia.project, {\n" +
    "    eager: false,\n" +
    "  })\n" +
    "  socialMedia?: ProjectSocialMedia[];\n" +
    "\n" +
    "  @Field(_type => [AnchorContractAddress], { nullable: true })\n" +
    "  @OneToMany(\n" +
    "    _type => AnchorContractAddress,\n" +
    "    anchorContractAddress => anchorContractAddress.project,\n" +
    "    {\n" +
    "      eager: true,\n" +
    "    },\n" +
    "  )\n" +
    "  anchorContracts?: AnchorContractAddress[];\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => ProjectStatus)\n" +
    "  @ManyToOne(_type => ProjectStatus)\n" +
    "  status: ProjectStatus;\n" +
    "  @RelationId((project: Project) => project.status)\n" +
    "  @Column({ nullable: true })\n" +
    "  statusId: number;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => User, { nullable: true })\n" +
    "  @ManyToOne(() => User, { eager: true })\n" +
    "  adminUser: User;\n" +
    "\n" +
    "  @Column({ nullable: true })\n" +
    "  @Field(_type => Int)\n" +
    "  @RelationId((project: Project) => project.adminUser)\n" +
    "  adminUserId: number;\n" +
    "\n" +
    "  @Field(_type => [ProjectStatusHistory], { nullable: true })\n" +
    "  @OneToMany(\n" +
    "    _type => ProjectStatusHistory,\n" +
    "    projectStatusHistory => projectStatusHistory.project,\n" +
    "  )\n" +
    "  statusHistory?: ProjectStatusHistory[];\n" +
    "\n" +
    "  @Field(_type => ProjectVerificationForm, { nullable: true })\n" +
    "  @OneToOne(\n" +
    "    _type => ProjectVerificationForm,\n" +
    "    projectVerificationForm => projectVerificationForm.project,\n" +
    "    { nullable: true },\n" +
    "  )\n" +
    "  projectVerificationForm?: ProjectVerificationForm;\n" +
    "\n" +
    "  @Field(_type => FeaturedUpdate, { nullable: true })\n" +
    "  @OneToOne(_type => FeaturedUpdate, featuredUpdate => featuredUpdate.project, {\n" +
    "    nullable: true,\n" +
    "  })\n" +
    "  featuredUpdate?: FeaturedUpdate;\n" +
    "\n" +
    "  @Field(_type => ProjectPowerView, { nullable: true })\n" +
    "  @OneToOne(\n" +
    "    _type => ProjectPowerView,\n" +
    "    projectPowerView => projectPowerView.project,\n" +
    "  )\n" +
    "  projectPower?: ProjectPowerView;\n" +
    "\n" +
    "  @Field(_type => ProjectFuturePowerView, { nullable: true })\n" +
    "  @OneToOne(\n" +
    "    _type => ProjectFuturePowerView,\n" +
    "    projectFuturePowerView => projectFuturePowerView.project,\n" +
    "  )\n" +
    "  projectFuturePower?: ProjectFuturePowerView;\n" +
    "\n" +
    "  @Field(_type => ProjectInstantPowerView, { nullable: true })\n" +
    "  @OneToOne(\n" +
    "    _type => ProjectInstantPowerView,\n" +
    "    projectInstantPowerView => projectInstantPowerView.project,\n" +
    "  )\n" +
    "  projectInstantPower?: ProjectInstantPowerView;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  verificationFormStatus?: string;\n" +
    "\n" +
    "  @Field(_type => [ProjectEstimatedMatchingView], { nullable: true })\n" +
    "  @OneToMany(\n" +
    "    _type => ProjectEstimatedMatchingView,\n" +
    "    projectEstimatedMatchingView => projectEstimatedMatchingView.project,\n" +
    "  )\n" +
    "  projectEstimatedMatchingView?: ProjectEstimatedMatchingView[];\n" +
    "\n" +
    "  @Field(_type => Float)\n" +
    "  @Column({ type: 'real' })\n" +
    "  totalDonations: number;\n" +
    "\n" +
    "  @Field(_type => Float)\n" +
    "  @Column({ type: 'real', default: 0 })\n" +
    "  totalTraceDonations: number;\n" +
    "\n" +
    "  @Field(_type => Int, { defaultValue: 0 })\n" +
    "  @Column({ type: 'integer', default: 0 })\n" +
    "  totalReactions: number;\n" +
    "\n" +
    "  @Field(_type => Int, { nullable: true })\n" +
    "  @Column({ type: 'integer', nullable: true })\n" +
    "  totalProjectUpdates: number;\n" +
    "\n" +
    "  @Field(_type => Float, { nullable: true })\n" +
    "  @Column({ type: 'float', nullable: true })\n" +
    "  sumDonationValueUsdForActiveQfRound: number;\n" +
    "\n" +
    "  @Field(_type => Int, { nullable: true })\n" +
    "  @Column({ type: 'int', nullable: true })\n" +
    "  countUniqueDonorsForActiveQfRound: number;\n" +
    "\n" +
    "  @Field(_type => Int, { nullable: true })\n" +
    "  @Column({ type: 'int', nullable: true })\n" +
    "  countUniqueDonors: number;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: true })\n" +
    "  @Column({ type: 'boolean', default: null, nullable: true })\n" +
    "  listed?: boolean | null;\n" +
    "\n" +
    "  // @Field(_type => Boolean, { nullable: true })\n" +
    "  // @Column({ type: 'boolean', default: false })\n" +
    "  // tunnableQf?: boolean;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: true })\n" +
    "  @Column({ type: 'boolean', default: false })\n" +
    "  isGivbackEligible: boolean;\n" +
    "\n" +
    "  @Field(_type => String)\n" +
    "  @Column({\n" +
    "    type: 'enum',\n" +
    "    enum: ReviewStatus,\n" +
    "    default: ReviewStatus.NotReviewed,\n" +
    "  })\n" +
    "  reviewStatus: ReviewStatus;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  projectUrl?: string;\n" +
    "\n" +
    "  // Virtual attribute to subquery result into\n" +
    "  @Field(_type => Int, { nullable: true })\n" +
    "  prevStatusId?: number;\n" +
    "\n" +
    "  // Virtual attribute for projectUpdate\n" +
    "  @Field(_type => ProjectUpdate, { nullable: true })\n" +
    "  projectUpdate?: any;\n" +
    "\n" +
    "  @Field(_type => [ProjectUpdate], { nullable: true })\n" +
    "  @OneToMany(() => ProjectUpdate, projectUpdate => projectUpdate.project)\n" +
    "  projectUpdates?: ProjectUpdate[];\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  adminJsBaseUrl: string;\n" +
    "\n" +
    "  // User reaction to the project\n" +
    "  @Field({ nullable: true })\n" +
    "  reaction?: Reaction;\n" +
    "\n" +
    "  @Field(_type => [Campaign], { nullable: true })\n" +
    "  campaigns: Campaign[];\n" +
    "\n" +
    "  @Column('uuid', { nullable: true, unique: true })\n" +
    "  endaomentId?: string;\n" +
    "\n" +
    "  // only projects with status active can be listed automatically\n" +
    "  static pendingReviewSince(maximumDaysForListing: number) {\n" +
    "    const maxDaysForListing = moment()\n" +
    "      .subtract(maximumDaysForListing, 'days')\n" +
    "      .endOf('day');\n" +
    "\n" +
    "    return this.createQueryBuilder('project')\n" +
    "      .where({ updatedAt: LessThan(maxDaysForListing) })\n" +
    "      .andWhere('project.reviewStatus = :reviewStatus', {\n" +
    "        reviewStatus: ReviewStatus.NotReviewed,\n" +
    "      })\n" +
    "      .andWhere('project.statusId = :statusId', { statusId: ProjStatus.active })\n" +
    "      .getMany();\n" +
    "  }\n" +
    "\n" +
    "  static async addProjectStatusHistoryRecord(inputData: {\n" +
    "    prevStatus?: ProjectStatus;\n" +
    "    status: ProjectStatus;\n" +
    "    project: Project;\n" +
    "    reasonId?: number;\n" +
    "    description?: string;\n" +
    "    userId?: number;\n" +
    "  }) {\n" +
    "    const { project, status, prevStatus, description, reasonId, userId } =\n" +
    "      inputData;\n" +
    "    let reason;\n" +
    "    let user;\n" +
    "\n" +
    "    if (userId) {\n" +
    "      user = await findUserById(userId);\n" +
    "    }\n" +
    "\n" +
    "    if (reasonId) {\n" +
    "      reason = await ProjectStatusReason.findOne({\n" +
    "        where: { id: reasonId, statusId: status.id },\n" +
    "      });\n" +
    "    }\n" +
    "\n" +
    "    await ProjectStatusHistory.create({\n" +
    "      project,\n" +
    "      status,\n" +
    "      prevStatus,\n" +
    "      reason,\n" +
    "      user,\n" +
    "      description,\n" +
    "      createdAt: new Date(),\n" +
    "    }).save();\n" +
    "  }\n" +
    "\n" +
    "  // In your main class\n" +
    "  @Field(_type => EstimatedMatching, { nullable: true })\n" +
    "  async estimatedMatching(): Promise<EstimatedMatching | null> {\n" +
    "    const activeQfRound = await findActiveQfRound();\n" +
    "    if (!activeQfRound) {\n" +
    "      return null;\n" +
    "    }\n" +
    "    const matchingPool = activeQfRound.allocatedFund;\n" +
    "\n" +
    "    const projectDonationsSqrtRootSum = await getProjectDonationsSqrtRootSum(\n" +
    "      this.id,\n" +
    "      activeQfRound.id,\n" +
    "    );\n" +
    "\n" +
    "    const allProjectsSum = await getQfRoundTotalSqrtRootSumSquared(\n" +
    "      activeQfRound.id,\n" +
    "    );\n" +
    "\n" +
    "    const estimatedClusterMatching =\n" +
    "      await EstimatedClusterMatching.createQueryBuilder(\n" +
    "        'estimated_cluster_matching',\n" +
    "      )\n" +
    "        .where('estimated_cluster_matching.\"projectId\" = :projectId', {\n" +
    "          projectId: this.id,\n" +
    "        })\n" +
    "        .andWhere('estimated_cluster_matching.\"qfRoundId\" = :qfRoundId', {\n" +
    "          qfRoundId: activeQfRound.id,\n" +
    "        })\n" +
    "        .getOne();\n" +
    "\n" +
    "    let matching: number;\n" +
    "    if (!estimatedClusterMatching) matching = 0;\n" +
    "\n" +
    "    if (!estimatedClusterMatching) {\n" +
    "      matching = 0;\n" +
    "    } else {\n" +
    "      matching = estimatedClusterMatching.matching;\n" +
    "    }\n" +
    "\n" +
    "    // Facilitate migration in frontend return empty values for now\n" +
    "    return {\n" +
    "      projectDonationsSqrtRootSum: projectDonationsSqrtRootSum,\n" +
    "      allProjectsSum: allProjectsSum,\n" +
    "      matchingPool,\n" +
    "      matching,\n" +
    "    };\n" +
    "  }\n" +
    "\n" +
    "  // Status 7 is deleted status\n" +
    "  mayUpdateStatus(user: User) {\n" +
    "    if (this.statusId === ProjStatus.cancelled) {\n" +
    "      throw new Error(\n" +
    "        i18n.__(\n" +
    "          translationErrorMessagesKeys.THIS_PROJECT_IS_CANCELLED_OR_DEACTIVATED_ALREADY,\n" +
    "        ),\n" +
    "      );\n" +
    "    }\n" +
    "\n" +
    "    if (user.id === this.adminUser?.id) {\n" +
    "      return true;\n" +
    "    } else {\n" +
    "      throw new Error(\n" +
    "        i18n.__(\n" +
    "          translationErrorMessagesKeys.YOU_DONT_HAVE_ACCESS_TO_DEACTIVATE_THIS_PROJECT,\n" +
    "        ),\n" +
    "      );\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  /**\n" +
    "   * Add / remove a heart to the score\n" +
    "   * @param loved true to add a heart, false to remove\n" +
    "   */\n" +
    "  updateQualityScoreHeart(loved: boolean) {\n" +
    "    // TODO should remove this, we should have a function to calculate score from scratch everytime\n" +
    "    if (loved) {\n" +
    "      this.qualityScore = this.qualityScore + 10;\n" +
    "    } else {\n" +
    "      this.qualityScore = this.qualityScore - 10;\n" +
    "    }\n" +
    "  }\n" +
    "\n" +
    "  @BeforeUpdate()\n" +
    "  async updateProjectDescriptionSummary() {\n" +
    "    await Project.update(\n" +
    "      { id: this.id },\n" +
    "      { descriptionSummary: getHtmlTextSummary(this.description) },\n" +
    "    );\n" +
    "  }\n" +
    "\n" +
    "  @BeforeInsert()\n" +
    "  setProjectDescriptionSummary() {\n" +
    "    this.descriptionSummary = getHtmlTextSummary(this.description);\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ProjectUpdate extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  readonly id: number;\n" +
    "\n" +
    "  @Index('trgm_idx_project_title', { synchronize: false })\n" +
    "  @Field(_type => String)\n" +
    "  @Column()\n" +
    "  title: string;\n" +
    "\n" +
    "  // Virtual attribute for projectUpdate\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  projectTitle?: string;\n" +
    "\n" +
    "  // Virtual attribute for projectUpdate\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  projectSlug?: string;\n" +
    "\n" +
    "  @Field(_type => ID)\n" +
    "  @Column()\n" +
    "  projectId: number;\n" +
    "\n" +
    "  @Field(_type => ID)\n" +
    "  @Column()\n" +
    "  userId: number;\n" +
    "\n" +
    "  @Field(_type => String)\n" +
    "  @Column()\n" +
    "  content: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  contentSummary?: string;\n" +
    "\n" +
    "  @Field(_type => Date)\n" +
    "  @Column()\n" +
    "  createdAt: Date;\n" +
    "\n" +
    "  @Field(_type => Boolean)\n" +
    "  @Column({ nullable: true })\n" +
    "  isMain: boolean;\n" +
    "\n" +
    "  @Field(_type => Int, { defaultValue: 0 })\n" +
    "  @Column({ type: 'integer', default: 0 })\n" +
    "  totalReactions: number;\n" +
    "\n" +
    "  // User reaction to the project update\n" +
    "  @Field(_type => Reaction, { nullable: true })\n" +
    "  reaction?: Reaction;\n" +
    "\n" +
    "  // Project oneToOne as virtual attribute as relation was not set properly\n" +
    "  @Field(_type => Project, { nullable: true })\n" +
    "  @ManyToOne(() => Project, project => project.projectUpdates)\n" +
    "  project?: Project;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('boolean', { default: false })\n" +
    "  isNonProfitOrganization: boolean;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  organizationCountry: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  organizationWebsite: string;\n" +
    "\n" +
    "  @Index('trgm_idx_project_description', { synchronize: false })\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  organizationDescription: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  twitter: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  facebook: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  linkedin: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  instagram: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  youtube: string;\n" +
    "\n" +
    "  @Column({ nullable: true })\n" +
    "  foundationDate: Date;\n" +
    "\n" +
    "  @Column('text', { nullable: true })\n" +
    "  mission: string;\n" +
    "\n" +
    "  @Column('text', { nullable: true })\n" +
    "  achievedMilestones: string;\n" +
    "\n" +
    "  @Column('text', { nullable: true })\n" +
    "  managingFundDescription: string;\n" +
    "\n" +
    "  @Field(_type => FeaturedUpdate, { nullable: true })\n" +
    "  @OneToOne(\n" +
    "    _type => FeaturedUpdate,\n" +
    "    featuredUpdate => featuredUpdate.projectUpdate,\n" +
    "    { nullable: true },\n" +
    "  )\n" +
    "  featuredUpdate?: FeaturedUpdate;\n" +
    "\n" +
    "  // does not call with createQueryBuilder\n" +
    "  @AfterInsert()\n" +
    "  async updateProjectStampOnCreation() {\n" +
    "    await Project.update(\n" +
    "      { id: this.projectId },\n" +
    "      { updatedAt: new Date(), latestUpdateCreationDate: new Date() },\n" +
    "    );\n" +
    "  }\n" +
    "\n" +
    "  @AfterUpdate()\n" +
    "  async updateProjectStampOnUpdate() {\n" +
    "    await Project.update({ id: this.projectId }, { updatedAt: new Date() });\n" +
    "  }\n" +
    "\n" +
    "  @BeforeRemove()\n" +
    "  async updateProjectStampOnDeletion() {\n" +
    "    await Project.update({ id: this.projectId }, { updatedAt: new Date() });\n" +
    "  }\n" +
    "\n" +
    "  @BeforeUpdate()\n" +
    "  async updateProjectUpdateContentSummary() {\n" +
    "    await ProjectUpdate.update(\n" +
    "      { id: this.id },\n" +
    "      { contentSummary: getHtmlTextSummary(this.content) },\n" +
    "    );\n" +
    "  }\n" +
    "\n" +
    "  @BeforeInsert()\n" +
    "  setProjectUpdateContentSummary() {\n" +
    "    this.contentSummary = getHtmlTextSummary(this.content);\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/category.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "  PrimaryGeneratedColumn,\n" +
    "  Column,\n" +
    "  Entity,\n" +
    "  BaseEntity,\n" +
    "  ManyToMany,\n" +
    "  ManyToOne,\n" +
    "  RelationId,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { MainCategory } from './mainCategory';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class Category extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  id: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('text', { unique: true, nullable: true })\n" +
    "  name: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  value: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  source: string;\n" +
    "\n" +
    "  @ManyToMany(_type => Project, project => project.categories)\n" +
    "  projects: Project[];\n" +
    "\n" +
    "  @Field(_ => MainCategory, { nullable: true })\n" +
    "  @ManyToOne(_ => MainCategory)\n" +
    "  mainCategory: MainCategory;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ default: true })\n" +
    "  // There are some categories that exist, we cant delete them but we dont want allow users\n" +
    "  // To use them anymore on project creation/updating, so we change set the isActive false for them\n" +
    "  isActive: boolean;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ default: true })\n" +
    "  // We want to show active categories but dont allow frontend to use them when create/update projects\n" +
    "  canUseOnFrontend: boolean;\n" +
    "\n" +
    "  @RelationId((category: Category) => category.mainCategory)\n" +
    "  @Column()\n" +
    "  mainCategoryId: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/projectStatusReason.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "  PrimaryGeneratedColumn,\n" +
    "  Column,\n" +
    "  Entity,\n" +
    "  BaseEntity,\n" +
    "  ManyToOne,\n" +
    "  RelationId,\n" +
    "} from 'typeorm';\n" +
    "import { ProjectStatus } from './projectStatus';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ProjectStatusReason extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  id: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ nullable: true })\n" +
    "  description: string;\n" +
    "\n" +
    "  @Field(_type => ProjectStatus)\n" +
    "  @ManyToOne(_type => ProjectStatus)\n" +
    "  status: ProjectStatus;\n" +
    "\n" +
    "  @RelationId(\n" +
    "    (projectStatusReason: ProjectStatusReason) => projectStatusReason.status,\n" +
    "  )\n" +
    "  @Column({ nullable: true })\n" +
    "  statusId: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/projectAddress.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "  BaseEntity,\n" +
    "  Column,\n" +
    "  CreateDateColumn,\n" +
    "  Entity,\n" +
    "  Index,\n" +
    "  ManyToOne,\n" +
    "  PrimaryGeneratedColumn,\n" +
    "  RelationId,\n" +
    "  Unique,\n" +
    "  UpdateDateColumn,\n" +
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
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  readonly id: number;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  title?: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column()\n" +
    "  networkId: number;\n" +
    "\n" +
    "  @Field(_type => String)\n" +
    "  @Column({\n" +
    "    type: 'enum',\n" +
    "    enum: ChainType,\n" +
    "    default: ChainType.EVM,\n" +
    "  })\n" +
    "  chainType: ChainType;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field()\n" +
    "  @Column()\n" +
    "  address: string;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => Project)\n" +
    "  @ManyToOne(_type => Project)\n" +
    "  project: Project;\n" +
    "\n" +
    "  @RelationId((relatedAddress: ProjectAddress) => relatedAddress.project)\n" +
    "  @Column({ nullable: true })\n" +
    "  projectId: number;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => User, { nullable: true })\n" +
    "  @ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "  user: User;\n" +
    "\n" +
    "  @RelationId((relatedAddress: ProjectAddress) => relatedAddress.user)\n" +
    "  @Column({ nullable: true })\n" +
    "  userId: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('boolean', { default: false })\n" +
    "  isRecipient: boolean;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  memo: string;\n" +
    "\n" +
    "  @UpdateDateColumn()\n" +
    "  updatedAt: Date;\n" +
    "\n" +
    "  @CreateDateColumn()\n" +
    "  createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/donation.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, Int, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "  PrimaryGeneratedColumn,\n" +
    "  Column,\n" +
    "  Entity,\n" +
    "  BaseEntity,\n" +
    "  ManyToOne,\n" +
    "  RelationId,\n" +
    "  Index,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "import { QfRound } from './qfRound';\n" +
    "import { ChainType } from '../types/network';\n" +
    "import { RecurringDonation } from './recurringDonation';\n" +
    "\n" +
    "export const DONATION_STATUS = {\n" +
    "  PENDING: 'pending',\n" +
    "  VERIFIED: 'verified',\n" +
    "  FAILED: 'failed',\n" +
    "};\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class Donation extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  id: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  // It's transactionHash for crypto donation, and trackingCode for fiat donation\n" +
    "  transactionId: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('integer', { nullable: true })\n" +
    "  // To match the transaction in case user has done speed up\n" +
    "  nonce: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ nullable: false })\n" +
    "  transactionNetworkId: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ nullable: true })\n" +
    "  safeTransactionId?: string;\n" +
    "\n" +
    "  @Field(_type => String)\n" +
    "  @Column({\n" +
    "    type: 'enum',\n" +
    "    enum: ChainType,\n" +
    "    default: ChainType.EVM,\n" +
    "  })\n" +
    "  chainType: ChainType;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('boolean', { default: false })\n" +
    "  // https://github.com/Giveth/impact-graph/issues/407#issuecomment-1066892258\n" +
    "  isProjectGivbackEligible: boolean;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('text', { default: DONATION_STATUS.PENDING })\n" +
    "  status: string;\n" +
    "\n" +
    "  @Field(_type => Boolean)\n" +
    "  @Column({ type: 'boolean', default: false })\n" +
    "  isExternal: boolean;\n" +
    "\n" +
    "  @Field(_type => Int)\n" +
    "  @Column('integer', { nullable: true })\n" +
    "  blockNumber?: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  origin: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  verifyErrorMessage: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('boolean', { default: false })\n" +
    "  speedup: boolean;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('boolean', { default: false })\n" +
    "  isCustomToken: boolean;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('boolean', { default: false })\n" +
    "  isFiat: boolean;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column()\n" +
    "  toWalletAddress: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column()\n" +
    "  fromWalletAddress: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  tokenAddress?: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column()\n" +
    "  currency: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  anonymous: boolean;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ type: 'real' })\n" +
    "  amount: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ type: 'real', nullable: true })\n" +
    "  valueEth: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ type: 'real', nullable: true })\n" +
    "  valueUsd: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ type: 'real', nullable: true })\n" +
    "  priceEth: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ type: 'real', nullable: true })\n" +
    "  priceUsd: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ type: 'real', nullable: true })\n" +
    "  givbackFactor: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  powerRound: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ type: 'real', nullable: true })\n" +
    "  projectRank?: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ type: 'real', nullable: true })\n" +
    "  bottomRankInRound?: number;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => Project)\n" +
    "  @ManyToOne(_type => Project, { eager: true })\n" +
    "  project: Project;\n" +
    "\n" +
    "  @RelationId((donation: Donation) => donation.project)\n" +
    "  @Column({ nullable: true })\n" +
    "  projectId: number;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => QfRound, { nullable: true })\n" +
    "  @ManyToOne(_type => QfRound, { eager: true })\n" +
    "  qfRound: QfRound;\n" +
    "\n" +
    "  @RelationId((donation: Donation) => donation.qfRound)\n" +
    "  @Column({ nullable: true })\n" +
    "  qfRoundId: number;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => QfRound, { nullable: true })\n" +
    "  @ManyToOne(_type => QfRound, { eager: true })\n" +
    "  distributedFundQfRound: QfRound;\n" +
    "\n" +
    "  @RelationId((donation: Donation) => donation.distributedFundQfRound)\n" +
    "  @Column({ nullable: true })\n" +
    "  distributedFundQfRoundId: number;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => User, { nullable: true })\n" +
    "  @ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "  user?: User;\n" +
    "\n" +
    "  @RelationId((donation: Donation) => donation.user)\n" +
    "  @Column({ nullable: true })\n" +
    "  userId: number;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => RecurringDonation, { nullable: true })\n" +
    "  @ManyToOne(_type => RecurringDonation, { eager: true, nullable: true })\n" +
    "  recurringDonation?: RecurringDonation;\n" +
    "\n" +
    "  @RelationId((donation: Donation) => donation.recurringDonation)\n" +
    "  @Column({ nullable: true })\n" +
    "  recurringDonationId: number;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  contactEmail?: string | null;\n" +
    "\n" +
    "  @Field(_type => Number, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  qfRoundUserScore?: number;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => Date)\n" +
    "  @Column()\n" +
    "  createdAt: Date;\n" +
    "\n" +
    "  @Field(_type => Date, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  importDate: Date;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  donationType?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  onramperTransactionStatus?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  onramperId?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  referrerWallet?: string;\n" +
    "\n" +
    "  @Field(_type => Date, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  referralStartTimestamp?: Date;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: false })\n" +
    "  @Column({ nullable: false, default: false })\n" +
    "  isReferrerGivbackEligible: boolean;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  transakStatus?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  transakTransactionLink?: string;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: true })\n" +
    "  @Column({ nullable: true, default: false })\n" +
    "  segmentNotified: boolean;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: true })\n" +
    "  @Column({ nullable: true, default: false })\n" +
    "  isTokenEligibleForGivback: boolean;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('integer', { nullable: true })\n" +
    "  // To match the superFluid Virtual Period\n" +
    "  virtualPeriodStart?: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('integer', { nullable: true })\n" +
    "  // To match the superFluid Virtual Period\n" +
    "  virtualPeriodEnd?: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('boolean', { nullable: true, default: false })\n" +
    "  useDonationBox?: boolean;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  relevantDonationTxHash?: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ default: false })\n" +
    "  isQRDonation: boolean;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  toWalletMemo?: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('decimal', { precision: 5, scale: 2, nullable: true })\n" +
    "  donationPercentage?: number;\n" +
    "\n" +
    "  static async findXdaiGivDonationsWithoutPrice() {\n" +
    "    return this.createQueryBuilder('donation')\n" +
    "      .where(`donation.currency = 'GIV' AND donation.\"valueUsd\" IS NULL `)\n" +
    "      .getMany();\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/qfRound.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "  Field,\n" +
    "  ID,\n" +
    "  ObjectType,\n" +
    "  Int,\n" +
    "  Float,\n" +
    "  registerEnumType,\n" +
    "} from 'type-graphql';\n" +
    "import {\n" +
    "  PrimaryGeneratedColumn,\n" +
    "  Column,\n" +
    "  Entity,\n" +
    "  BaseEntity,\n" +
    "  ManyToMany,\n" +
    "  UpdateDateColumn,\n" +
    "  CreateDateColumn,\n" +
    "  Index,\n" +
    "  OneToMany,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { Donation } from './donation';\n" +
    "\n" +
    "export enum QfStrategyEnum {\n" +
    "  Cocm = 'cocm',\n" +
    "  Regular = 'regular',\n" +
    "}\n" +
    "\n" +
    "registerEnumType(QfStrategyEnum, {\n" +
    "  name: 'QfStrategyEnum', // Name to expose in GraphQL schema\n" +
    "});\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class QfRound extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  id: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  name: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  title: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  description: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Index({ unique: true })\n" +
    "  @Column('text')\n" +
    "  slug: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  isActive: boolean;\n" +
    "\n" +
    "  @Field(_type => Number)\n" +
    "  @Column()\n" +
    "  allocatedFund: number;\n" +
    "\n" +
    "  @Field(_type => Number, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  allocatedFundUSD: number;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  allocatedFundUSDPreferred: boolean;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  allocatedTokenSymbol: string;\n" +
    "\n" +
    "  @Field(_type => Number, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  allocatedTokenChainId: number;\n" +
    "\n" +
    "  @Field(_type => Number)\n" +
    "  @Column('real', { default: 0.2 })\n" +
    "  maximumReward: number;\n" +
    "\n" +
    "  @Field(_type => Number)\n" +
    "  @Column('real')\n" +
    "  minimumPassportScore: number;\n" +
    "\n" +
    "  @Field(_type => Float, { nullable: true })\n" +
    "  @Column({ type: 'float', nullable: true })\n" +
    "  minMBDScore: number;\n" +
    "\n" +
    "  @Field(_type => Number)\n" +
    "  @Column('real', { default: 1 })\n" +
    "  minimumValidUsdValue: number;\n" +
    "\n" +
    "  @Field(_type => [Int], { nullable: true }) // Define the new field as an array of integers\n" +
    "  @Column('integer', { array: true, default: [] })\n" +
    "  eligibleNetworks: number[];\n" +
    "\n" +
    "  @Field(_type => Date)\n" +
    "  @Column()\n" +
    "  beginDate: Date;\n" +
    "\n" +
    "  @Field(_type => Date)\n" +
    "  @Column()\n" +
    "  endDate: Date;\n" +
    "\n" +
    "  @Field(_type => QfStrategyEnum, { nullable: true })\n" +
    "  @Column({\n" +
    "    type: 'enum',\n" +
    "    enum: QfStrategyEnum,\n" +
    "    default: QfStrategyEnum.Regular,\n" +
    "    nullable: true,\n" +
    "  })\n" +
    "  qfStrategy?: QfStrategyEnum;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  bannerBgImage: string;\n" +
    "\n" +
    "  @Field(_type => [String])\n" +
    "  @Column('text', { array: true, default: [] })\n" +
    "  sponsorsImgs: string[];\n" +
    "\n" +
    "  @Field(_type => Boolean)\n" +
    "  @Column({ default: false })\n" +
    "  isDataAnalysisDone: boolean;\n" +
    "\n" +
    "  @Field(_type => Date, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  clusterMatchingSyncAt?: Date;\n" +
    "\n" +
    "  @UpdateDateColumn()\n" +
    "  updatedAt: Date;\n" +
    "\n" +
    "  @CreateDateColumn()\n" +
    "  createdAt: Date;\n" +
    "\n" +
    "  @ManyToMany(_type => Project, project => project.qfRounds)\n" +
    "  projects: Project[];\n" +
    "\n" +
    "  @OneToMany(_type => Donation, donation => donation.qfRound)\n" +
    "  donations: Donation[];\n" +
    "\n" +
    "  // only projects with status active can be listed automatically\n" +
    "  isEligibleNetwork(donationNetworkId: number): boolean {\n" +
    "    // when not specified, all are valid\n" +
    "    if (this.eligibleNetworks.length === 0) return true;\n" +
    "\n" +
    "    return this.eligibleNetworks.includes(donationNetworkId);\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/projectSocialMedia.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "  BaseEntity,\n" +
    "  Column,\n" +
    "  Entity,\n" +
    "  Index,\n" +
    "  ManyToOne,\n" +
    "  PrimaryGeneratedColumn,\n" +
    "  RelationId,\n" +
    "} from 'typeorm';\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "\n" +
    "export enum ProjectSocialMediaType {\n" +
    "  FACEBOOK = 'FACEBOOK',\n" +
    "  X = 'X',\n" +
    "  INSTAGRAM = 'INSTAGRAM',\n" +
    "  YOUTUBE = 'YOUTUBE',\n" +
    "  LINKEDIN = 'LINKEDIN',\n" +
    "  REDDIT = 'REDDIT',\n" +
    "  DISCORD = 'DISCORD',\n" +
    "  FARCASTER = 'FARCASTER',\n" +
    "  LENS = 'LENS',\n" +
    "  WEBSITE = 'WEBSITE',\n" +
    "  TELEGRAM = 'TELEGRAM',\n" +
    "  GITHUB = 'GITHUB',\n" +
    "}\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ProjectSocialMedia extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  readonly id: number;\n" +
    "\n" +
    "  @Field(_type => String)\n" +
    "  @Column({\n" +
    "    type: 'enum',\n" +
    "    enum: ProjectSocialMediaType,\n" +
    "  })\n" +
    "  type: ProjectSocialMediaType;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field()\n" +
    "  @Column()\n" +
    "  link: string;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => Project)\n" +
    "  @ManyToOne(_type => Project)\n" +
    "  project: Project;\n" +
    "\n" +
    "  @RelationId((relatedAddress: ProjectSocialMedia) => relatedAddress.project)\n" +
    "  @Column({ nullable: true })\n" +
    "  projectId: number;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => User, { nullable: true })\n" +
    "  @ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "  user: User;\n" +
    "\n" +
    "  @RelationId((relatedAddress: ProjectSocialMedia) => relatedAddress.user)\n" +
    "  @Column({ nullable: true })\n" +
    "  userId: number;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/projectStatus.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "  PrimaryGeneratedColumn,\n" +
    "  Column,\n" +
    "  Entity,\n" +
    "  BaseEntity,\n" +
    "  OneToMany,\n" +
    "  Index,\n" +
    "} from 'typeorm';\n" +
    "import { Project } from './project';\n" +
    "import { ProjectStatusReason } from './projectStatusReason';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class ProjectStatus extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  id: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('text', { unique: true })\n" +
    "  symbol: string;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field()\n" +
    "  @Column({ nullable: true })\n" +
    "  name: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ nullable: true })\n" +
    "  description: string;\n" +
    "\n" +
    "  @Field(_type => [Project], { nullable: true })\n" +
    "  @OneToMany(_type => Project, project => project.status)\n" +
    "  projects?: Project[];\n" +
    "\n" +
    "  @Field(_type => [ProjectStatusReason], { nullable: true })\n" +
    "  @OneToMany(\n" +
    "    _type => ProjectStatusReason,\n" +
    "    projectStatusReason => projectStatusReason.status,\n" +
    "  )\n" +
    "  reasons?: ProjectStatusReason[];\n" +
    "\n" +
    "  @Field(_type => [ProjectStatusReason], { nullable: true })\n" +
    "  @OneToMany(\n" +
    "    _type => ProjectStatusReason,\n" +
    "    projectStatusReason => projectStatusReason.status,\n" +
    "  )\n" +
    "  projectStatusHistories?: ProjectStatusReason[];\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/token.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "  PrimaryGeneratedColumn,\n" +
    "  Column,\n" +
    "  Entity,\n" +
    "  BaseEntity,\n" +
    "  ManyToMany,\n" +
    "  Index,\n" +
    "} from 'typeorm';\n" +
    "import { Organization } from './organization';\n" +
    "import { ChainType } from '../types/network';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Index(['address', 'networkId'], { unique: true })\n" +
    "export class Token extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  id: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('text')\n" +
    "  name: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('text')\n" +
    "  symbol: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('text')\n" +
    "  address: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  // Some tokens like PAN, XNODE, CRV dont have price on coingecko for gnosis network, So frontend guys suggested\n" +
    "  // add  mainnetAddress field for those tokens, then client can get price of these tokens in mainnet\n" +
    "  mainnetAddress: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column()\n" +
    "  networkId: number;\n" +
    "\n" +
    "  @Field(_type => String)\n" +
    "  @Column({\n" +
    "    type: 'enum',\n" +
    "    enum: ChainType,\n" +
    "    default: ChainType.EVM,\n" +
    "  })\n" +
    "  chainType: ChainType;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column()\n" +
    "  decimals: number;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  // 1 is the order with most priority, and null means it doesn't have any priority\n" +
    "  order?: number;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: true })\n" +
    "  @Column({ nullable: false, default: false })\n" +
    "  isGivbackEligible: boolean;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: true })\n" +
    "  @Column({ nullable: true, default: false })\n" +
    "  isStableCoin: boolean;\n" +
    "\n" +
    "  @Field(_type => Boolean)\n" +
    "  @Column({ default: false })\n" +
    "  isQR: boolean;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  // If we fill that, we will get price of this token from coingecko\n" +
    "  coingeckoId: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  // If we fill that, we will get price of this token from cryptocompare\n" +
    "  cryptoCompareId: string;\n" +
    "\n" +
    "  @ManyToMany(_type => Organization, organization => organization.tokens, {\n" +
    "    // make it true to show organizations in token page of adminjs panel\n" +
    "    eager: true,\n" +
    "  })\n" +
    "  organizations: Organization[];\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/mainCategory.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "  BaseEntity,\n" +
    "  Column,\n" +
    "  Entity,\n" +
    "  OneToMany,\n" +
    "  PrimaryGeneratedColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Category } from './category';\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "export class MainCategory extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  id: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('text', { unique: true })\n" +
    "  title: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column('text', { unique: true })\n" +
    "  slug: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  description: string;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  // ipfs link\n" +
    "  banner: string;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ default: true })\n" +
    "  isActive: boolean;\n" +
    "\n" +
    "  @Field(_type => [Category], { nullable: true })\n" +
    "  @OneToMany(_type => Category, category => category.mainCategory)\n" +
    "  categories?: Category[];\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/user.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import { Field, Float, ID, Int, ObjectType } from 'type-graphql';\n" +
    "import {\n" +
    "  BaseEntity,\n" +
    "  Column,\n" +
    "  CreateDateColumn,\n" +
    "  Entity,\n" +
    "  Index,\n" +
    "  OneToMany,\n" +
    "  OneToOne,\n" +
    "  PrimaryGeneratedColumn,\n" +
    "  UpdateDateColumn,\n" +
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
    "export enum UserRole {\n" +
    "  // Normal users, not admin\n" +
    "  RESTRICTED = 'restricted',\n" +
    "\n" +
    "  ADMIN = 'admin',\n" +
    "  OPERATOR = 'operator',\n" +
    "  VERIFICATION_FORM_REVIEWER = 'reviewer',\n" +
    "  CAMPAIGN_MANAGER = 'campaignManager',\n" +
    "  QF_MANAGER = 'qfManager',\n" +
    "}\n" +
    "\n" +
    "export type UserStreamBalanceWarning =\n" +
    "  | NOTIFICATIONS_EVENT_NAMES.SUPER_TOKENS_BALANCE_MONTH\n" +
    "  | NOTIFICATIONS_EVENT_NAMES.SUPER_TOKENS_BALANCE_WEEK\n" +
    "  | NOTIFICATIONS_EVENT_NAMES.SUPER_TOKENS_BALANCE_DEPLETED;\n" +
    "\n" +
    "@ObjectType()\n" +
    "@Entity()\n" +
    "export class User extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  readonly id: number;\n" +
    "\n" +
    "  @Column({\n" +
    "    type: 'enum',\n" +
    "    enum: UserRole,\n" +
    "    default: UserRole.RESTRICTED,\n" +
    "  })\n" +
    "  role: UserRole;\n" +
    "\n" +
    "  @Field(_type => [AccountVerification], { nullable: true })\n" +
    "  @OneToMany(\n" +
    "    _type => AccountVerification,\n" +
    "    accountVerification => accountVerification.user,\n" +
    "  )\n" +
    "  accountVerifications?: AccountVerification[];\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  email?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  firstName?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  lastName?: string;\n" +
    "\n" +
    "  @Index('trgm_idx_user_name', { synchronize: false })\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  name?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true, unique: true })\n" +
    "  walletAddress?: string;\n" +
    "\n" +
    "  @Column({\n" +
    "    type: 'json',\n" +
    "    nullable: true,\n" +
    "  })\n" +
    "  streamBalanceWarning?: Record<string, UserStreamBalanceWarning | null>;\n" +
    "\n" +
    "  @Column({ nullable: true })\n" +
    "  password?: string;\n" +
    "\n" +
    "  @Column({ nullable: true })\n" +
    "  encryptedPassword?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  avatar?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  url?: string;\n" +
    "\n" +
    "  @Field(_type => Float, { nullable: true })\n" +
    "  @Column({ type: 'real', nullable: true, default: null })\n" +
    "  passportScore?: number;\n" +
    "\n" +
    "  @Field(_type => Number, { nullable: true })\n" +
    "  @Column({ nullable: true, default: null })\n" +
    "  passportStamps?: number;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  location?: string;\n" +
    "\n" +
    "  @Column()\n" +
    "  loginType: string;\n" +
    "\n" +
    "  @Column({ nullable: true })\n" +
    "  dId?: string;\n" +
    "\n" +
    "  @Column('bool', { default: false })\n" +
    "  confirmed: boolean;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  @Column({ nullable: true })\n" +
    "  chainvineId?: string;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: true })\n" +
    "  @Column('bool', { default: false })\n" +
    "  wasReferred: boolean;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: true })\n" +
    "  @Column('bool', { default: false })\n" +
    "  isReferrer: boolean;\n" +
    "\n" +
    "  @Field(() => ReferredEvent, { nullable: true })\n" +
    "  @OneToOne(() => ReferredEvent, referredEvent => referredEvent.user, {\n" +
    "    cascade: true,\n" +
    "  })\n" +
    "  referredEvent?: ReferredEvent;\n" +
    "\n" +
    "  @Column('bool', { default: false })\n" +
    "  segmentIdentified: boolean;\n" +
    "\n" +
    "  // Admin Reviewing Forms\n" +
    "  @Field(_type => [ProjectVerificationForm], { nullable: true })\n" +
    "  @OneToMany(\n" +
    "    _type => ProjectVerificationForm,\n" +
    "    projectVerificationForm => projectVerificationForm.reviewer,\n" +
    "  )\n" +
    "  projectVerificationForms?: ProjectVerificationForm[];\n" +
    "\n" +
    "  @Field(_type => Float, { nullable: true })\n" +
    "  @Column({ type: 'real', nullable: true, default: 0 })\n" +
    "  totalDonated: number;\n" +
    "\n" +
    "  @Field(_type => Float, { nullable: true })\n" +
    "  @Column({ type: 'real', nullable: true, default: 0 })\n" +
    "  totalReceived: number;\n" +
    "\n" +
    "  @Field(_type => [ProjectStatusHistory], { nullable: true })\n" +
    "  @OneToMany(\n" +
    "    _type => ProjectStatusHistory,\n" +
    "    projectStatusHistory => projectStatusHistory.user,\n" +
    "  )\n" +
    "  projectStatusHistories?: ProjectStatusHistory[];\n" +
    "\n" +
    "  @Field(_type => [PowerBoosting], { nullable: true })\n" +
    "  @OneToMany(_type => PowerBoosting, powerBoosting => powerBoosting.user)\n" +
    "  powerBoostings?: PowerBoosting[];\n" +
    "\n" +
    "  @UpdateDateColumn()\n" +
    "  updatedAt: Date;\n" +
    "\n" +
    "  @CreateDateColumn()\n" +
    "  createdAt: Date;\n" +
    "\n" +
    "  @Field(_type => Int, { nullable: true })\n" +
    "  projectsCount?: number;\n" +
    "\n" +
    "  @Field(_type => Float, { nullable: true })\n" +
    "  activeQFMBDScore?: number;\n" +
    "\n" +
    "  @Field(_type => Boolean, { nullable: true })\n" +
    "  @Column('bool', { default: false })\n" +
    "  isEmailVerified: boolean;\n" +
    "\n" +
    "  @Column('varchar', { nullable: true, default: null })\n" +
    "  emailVerificationCode?: string | null;\n" +
    "\n" +
    "  @Field(_type => Int, { nullable: true })\n" +
    "  async donationsCount() {\n" +
    "    // Count for non-recurring donations\n" +
    "    const nonRecurringDonationsCount = await Donation.createQueryBuilder(\n" +
    "      'donation',\n" +
    "    )\n" +
    "      .where(`donation.\"userId\" = :userId`, { userId: this.id })\n" +
    "      .andWhere(`donation.status = :status`, {\n" +
    "        status: DONATION_STATUS.VERIFIED,\n" +
    "      })\n" +
    "      .andWhere(`donation.\"recurringDonationId\" IS NULL`)\n" +
    "      .cache(\n" +
    "        `user-donationsCount-normal-${this.id}`,\n" +
    "        Number(process.env.USER_STATS_CACHE_TIME || 60000),\n" +
    "      )\n" +
    "      .getCount();\n" +
    "\n" +
    "    // Count for recurring donations\n" +
    "    const recurringDonationsCount = await RecurringDonation.createQueryBuilder(\n" +
    "      'recurring_donation',\n" +
    "    )\n" +
    "      .where(`recurring_donation.\"donorId\" = :donorId`, { donorId: this.id })\n" +
    "      .andWhere('recurring_donation.totalUsdStreamed > 0')\n" +
    "      .cache(\n" +
    "        `user-donationsCount-recurring-${this.id}`,\n" +
    "        Number(process.env.USER_STATS_CACHE_TIME || 60000),\n" +
    "      )\n" +
    "      .getCount();\n" +
    "\n" +
    "    // Sum of both counts\n" +
    "    return nonRecurringDonationsCount + recurringDonationsCount;\n" +
    "  }\n" +
    "\n" +
    "  @Field(_type => Int, { nullable: true })\n" +
    "  async likedProjectsCount() {\n" +
    "    const likedProjectsCount = await Reaction.createQueryBuilder('reaction')\n" +
    "      .innerJoinAndSelect('reaction.project', 'project')\n" +
    "      .where('reaction.userId = :id', { id: this.id })\n" +
    "      .andWhere(\n" +
    "        `project.statusId = ${ProjStatus.active} AND project.reviewStatus = :reviewStatus`,\n" +
    "        { reviewStatus: ReviewStatus.Listed },\n" +
    "      )\n" +
    "      .cache(\n" +
    "        `user-likedProjectsCount-recurring-${this.id}`,\n" +
    "        Number(process.env.USER_STATS_CACHE_TIME || 60000),\n" +
    "      )\n" +
    "      .getCount();\n" +
    "\n" +
    "    return likedProjectsCount;\n" +
    "  }\n" +
    "\n" +
    "  @Field(_type => Int, { nullable: true })\n" +
    "  async boostedProjectsCount() {\n" +
    "    return findPowerBoostingsCountByUserId(this.id);\n" +
    "  }\n" +
    "\n" +
    "  segmentUserId() {\n" +
    "    return `givethId-${this.id}`;\n" +
    "  }\n" +
    "}\n" +
    "\n" +
    "@ObjectType()\n" +
    "export class UserPublicData extends BaseEntity {\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  firstName?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  lastName?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  name?: string;\n" +
    "\n" +
    "  @Field(_type => String, { nullable: true })\n" +
    "  walletAddress?: string;\n" +
    "}\n" +
    "\n" +
    "```\n" +
    "\n" +
    "`/Users/ramin/Giveth/impact-graph/src/agentEntities/recurringDonation.ts`:\n" +
    "\n" +
    "```ts\n" +
    "import {\n" +
    "  BaseEntity,\n" +
    "  Column,\n" +
    "  CreateDateColumn,\n" +
    "  Entity,\n" +
    "  Index,\n" +
    "  ManyToOne,\n" +
    "  OneToMany,\n" +
    "  PrimaryGeneratedColumn,\n" +
    "  RelationId,\n" +
    "  Unique,\n" +
    "  UpdateDateColumn,\n" +
    "} from 'typeorm';\n" +
    "import { Field, ID, ObjectType } from 'type-graphql';\n" +
    "import { Project } from './project';\n" +
    "import { User } from './user';\n" +
    "import { AnchorContractAddress } from './anchorContractAddress';\n" +
    "import { Donation } from './donation';\n" +
    "\n" +
    "export interface RECURRING_DONATION_STATUS {\n" +
    "  PENDING: 'pending';\n" +
    "  VERIFIED: 'verified';\n" +
    "  ENDED: 'ended';\n" +
    "  FAILED: 'failed';\n" +
    "  ACTIVE: 'active';\n" +
    "}\n" +
    "\n" +
    "@Entity()\n" +
    "@ObjectType()\n" +
    "@Unique(['txHash', 'networkId', 'project'])\n" +
    "// TODO entity is not completed\n" +
    "export class RecurringDonation extends BaseEntity {\n" +
    "  @Field(_type => ID)\n" +
    "  @PrimaryGeneratedColumn()\n" +
    "  readonly id: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ nullable: false })\n" +
    "  networkId: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ nullable: true, default: 0, type: 'real' })\n" +
    "  amountStreamed?: number;\n" +
    "\n" +
    "  @Field()\n" +
    "  @Column({ nullable: true, default: 0, type: 'real' })\n" +
    "  totalUsdStreamed?: number;\n" +
    "\n" +
    "  // per second\n" +
    "  @Field()\n" +
    "  @Column({ nullable: false })\n" +
    "  flowRate: string;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field()\n" +
    "  @Column({ nullable: false })\n" +
    "  txHash: string;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field()\n" +
    "  @Column({ nullable: false })\n" +
    "  currency: string;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field()\n" +
    "  @Column({ nullable: false, default: 'pending' })\n" +
    "  status: RECURRING_DONATION_STATUS;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => Project)\n" +
    "  @ManyToOne(_type => Project)\n" +
    "  project: Project;\n" +
    "\n" +
    "  @RelationId(\n" +
    "    (recurringDonation: RecurringDonation) => recurringDonation.project,\n" +
    "  )\n" +
    "  @Column({ nullable: true })\n" +
    "  projectId: number;\n" +
    "\n" +
    "  @Column({ nullable: true, default: false })\n" +
    "  @Field({ nullable: true })\n" +
    "  finished: boolean;\n" +
    "\n" +
    "  @Column({ nullable: true, default: false })\n" +
    "  @Field({ nullable: true })\n" +
    "  isArchived: boolean;\n" +
    "\n" +
    "  @Column({ nullable: true, default: false })\n" +
    "  @Field({ nullable: true })\n" +
    "  isBatch: boolean;\n" +
    "\n" +
    "  @Column({ nullable: true, default: false })\n" +
    "  @Field({ nullable: true })\n" +
    "  anonymous: boolean;\n" +
    "\n" +
    "  @Field({ nullable: true })\n" +
    "  @Column('text', { nullable: true })\n" +
    "  origin: string;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => AnchorContractAddress)\n" +
    "  @ManyToOne(_type => AnchorContractAddress, { eager: true })\n" +
    "  anchorContractAddress: AnchorContractAddress;\n" +
    "\n" +
    "  @RelationId(\n" +
    "    (recurringDonation: RecurringDonation) =>\n" +
    "      recurringDonation.anchorContractAddress,\n" +
    "  )\n" +
    "  @Column({ nullable: true })\n" +
    "  anchorContractAddressId: number;\n" +
    "\n" +
    "  @Index()\n" +
    "  @Field(_type => User, { nullable: true })\n" +
    "  @ManyToOne(_type => User, { eager: true, nullable: true })\n" +
    "  donor: User;\n" +
    "\n" +
    "  @RelationId((recurringDonation: RecurringDonation) => recurringDonation.donor)\n" +
    "  @Column({ nullable: true })\n" +
    "  donorId: number;\n" +
    "\n" +
    "  @Field(_type => [Donation], { nullable: true })\n" +
    "  @OneToMany(_type => Donation, donation => donation.recurringDonation)\n" +
    "  donations?: Donation[];\n" +
    "\n" +
    "  @UpdateDateColumn()\n" +
    "  @Field()\n" +
    "  updatedAt: Date;\n" +
    "\n" +
    "  @CreateDateColumn()\n" +
    "  @Field()\n" +
    "  createdAt: Date;\n" +
    "}\n" +
    "\n" +
    "```"
    + "\n" + "according to the typeorm entities above, send me only raw SQL query (without any description) to fetch below request:"
    + "\n" + "{{sqlQuery}}"
    + "\n" + "columns name like `projectId` in the `donation` table is case-sensitive and needs to be enclosed in double quotes to be recognized correctly by PostgreSQL, so make sure to use double quotes for column names in the SQL query."
    + "\n" + "please pay attention to the column names in the entities above before writing queries, for example in `project` table we have `creationDate` and we don't have `createdAt` column."
    + "\n" + "please change the table names in the entities above before writing queries, table names in Postgres and Typeorm are different, for example `qfRound` table in Typeorm is `qf_round` in Postgres and `projectStatus` table in Typeorm is `project_status` in Postgres."
    + "\n" + "NOTE: send only the SQL query without any description."

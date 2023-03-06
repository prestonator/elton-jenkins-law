import { getMediaData } from "@/src/api/fetchData/fetchMedia";
import styles from "@/src/styles/pages/MyCase.module.css";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "@/src/components/PrimaryButton";
import MultiStepForm from "@/src/Form/MultiStepForm";
export default async function Page() {
	const [myCaseData] = await getMediaData([12]);
	const { fullUrl: myCaseLogoUrl, altText: myCaseLogoAlt } = myCaseData;

	return (
		<>
			<section className={styles.sectionOne} id="section">
				<div className={styles.col}>
					<div className={styles.imageWrapper}>
						<Link href="https://mycase.com/login">
							<Image
								src={myCaseLogoUrl}
								alt={myCaseLogoAlt}
								fill
								className={styles.image}
							/>
						</Link>
					</div>
					<div className={styles.buttonWrapper}>
						<ButtonPrimary href="https://mycase.com/login">
							Login to MyCase
						</ButtonPrimary>
					</div>
				</div>
				<div className={styles.col}>
					<div className={styles.textContainer}>
						<span className={styles.subTitle}>What is</span>
						<h1 className={styles.title}>MyCase</h1>
						<span className={styles.subTitle}>A Brief Overview</span>
						<hr className={styles.divider} />
					</div>
					<div className={styles.textContent}>
						<p className={styles.bodyContent}>
							MyCase is an online case management system designed to help
							attorneys better manage their practice. It&apos;s a cloud-based
							solution that can be accessed with a computer, tablet, or
							smartphone. It is a comprehensive system that helps attorneys
							track their cases and tasks, accept payments, and communicate with
							their clients, all in one place.
						</p>
						<p className={styles.bodyContent}>
							MyCase is a secure system that is compliant with the latest
							industry regulations. It is easy to use, and provides attorneys
							with the tools they need to stay organized. With MyCase, attorneys
							can easily store and access documents, share files with clients,
							and schedule events and appointments.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.sectionTwo}>
				<div className={styles.col}>
					<div className={styles.textContent}>
						<h2 className={styles.bodyHeading}>How MyCase Helps Clients</h2>
						<hr className={styles.divider} />
						<p className={styles.bodyContent}>
							MyCase can help make the attorney-client relationship easier and
							more efficient. It provides clients with an easy way to stay
							informed about the status of their case, as well as access
							documents and other information that is relevant to their case.
							Clients can use the system to securely make payments and
							communicate with their attorney.
						</p>
						<p className={styles.bodyContent}>
							MyCase also makes it easier for attorneys to keep their clients up
							to date on the progress of their case. The system makes it simple
							to send documents and updates to clients, ensuring that everyone
							is on the same page. With MyCase, attorneys can easily manage
							client communication and keep their clients informed.
						</p>
						<h2 className={styles.bodyHeading}>Benefits of Using MyCase</h2>
						<hr className={styles.divider} />
						<p className={styles.bodyContent}>
							MyCase is a great way for attorneys to manage their practice, and
							it can provide clients with a lot of benefits as well. It makes it
							easy to stay informed about the progress of a case, and allows
							clients to securely access documents and other information that is
							relevant to their case. MyCase also makes it easier for attorneys
							to keep their clients up to date on the progress of their case.
						</p>
						<p className={styles.bodyContent}>
							Using MyCase also allows clients to securely make payments and
							communicate with their attorney. This can help make the
							attorney-client relationship easier and more efficient. With
							MyCase, both attorneys and their clients can benefit from the
							convenience and security of a cloud-based case management system.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.sectionThree}>
				<div className={styles.col}>
					
				</div>
			</section>
		</>
	);
}

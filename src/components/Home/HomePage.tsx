import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { greetingByHour } from "../../services/datetime";
import { userInfoAtom } from "../../state/atoms/auth-atom";
import { jobsAtom } from "../../state/atoms/jobs-atom";
import Registration from "./Registration";

type Props = {};

const HomePage = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const userInfo = useRecoilValue(userInfoAtom);
  const [jobs, setJobs] = useRecoilState(jobsAtom);
  return (
    <section>
      <div>
        <h2>
          {greetingByHour()}, <b>{userInfo?.name}</b>!
        </h2>
      </div>
      {!!jobs.length ? (
        <>
          <Registration />
          <ul>
            {jobs.map((job) => {
              return (
                !job.primary && (
                  <li key={job.id}>
                    <Link to={`/job/${job.id}`}>{job.name}</Link>
                  </li>
                )
              );
            })}
          </ul>
        </>
      ) : (
        <div>fullback</div>
      )}
    </section>
  );
};

export default HomePage;

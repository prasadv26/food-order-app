import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <div className="flex justify-between mx-3 mt-2 p-3">
      <div>
        <Link to={"/"}>
          <img
            className="cursor-pointer h-32"
            alt="Logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABWVBMVEX///8AAAD+AAD/+Pi5ubn7+/vm5uaurq6pqan19fX7AADR0dFRUVHr6+vj4+P5+flmZmYuLi7+RkaHh4fX19dHR0caGhre3t6fn5+Ojo7Hx8eYmJjx8fHNzc32AAA/Pz8mJiY1NTX/7+9tbW19fX29vb3/4eF2dnZXV1cXFxf+iIhDQ0OTk5P/0ND+cHD+NTX/rKz/urr+V1f+Y2P/3d3+UFD+ra3+KSn+fX3+jIz/o6P/x8f5PT3zubnqAAADAAT+ISH+amr0j47vl5fwTEzr2NbwTE3xvLvhjo/vx8Tqo6PvKCTlgX7vzczzbm3pYGTpcm+BcnkTFSLmIipFW07m5O7SXV7ewMPknJrUfHrZSlTbbn1dTljx1cXgqqcMGg7Pc27YP0HSVU17hHXQSDbw7drNOkHWhHhfaFvmVFXpkpsYJiLRUmEfExGvrqP2//HSKiztraK7T0mYavVuAAASw0lEQVR4nO1daXsiNxKWgOYw93AaGgPN7RtfY+M5fMSxPWNPZq/MZLJxMt5sstnLu/v/P6yqJPUBDcY25zz9frChUQu9VKmqVFJLhDhw4MCBAwcOHDhw4MDBfGHn5mR799nx6WF92i0ZC+oHSy4dr060abdn1KhvL7gsWNh3T7tNI8VpFz/kuDftVo0Oyle9/ADHyrRb9gScMcjX2nN7gi7XW7289/r6zLaimYTGdXJhabcNQlJsNNRCUdsUJTY258L+aO/Mfe2UkGf9Cbpc7wk5Mb8/mX3FXeui8OJ4EEGXa33D+n5pZ9oM7sHmAJUcDguH0+YwEIdP5QcUZ1mK7qX7CQxBcYZjgXv63LB4N20efVF/cifkWJhZp7E/GoIu1+a0mfTDSHoh4Nm0mfRBfVQEZ9bWXI+MoWtGh8iXo2O4Nm0u9vjyGX75Wjoqd8jC7xm1NKPzFi+mzaQfTkbFsDNtJv0wKoe4EJ02k77YHtTspa3jd++WDw6Wl9+9O95YGtBpl6fNoz/cts1+fnzw8qzXdmjXnYOv7W44mni7H4Dr7hYf7Z/LgYK2tnZ4/vLlxcXFy5eHa2v8snJ50p3HWZhRVyFwabanS/s4XNcu3yxvvXrVnfR+9fb45BzY1E8tN83yEB+woxNZ2FRARldvB7rJV8eX7K62znFjtiUIUJY5o2PW867fDeMilw5UQngOErKPcwBt88XS0h4h53+ANg9BkXEkpLO0sPVmVmOZXgTcxH38kCDuuUbcs58MtsC90U1w4ejrbzqbHYbT377u0d6j+RGfwHsrga9OL60iUs+Xjyy/wXz0QBPMrX/70T55tmOeFn5rW2R2oehtX3inO7ioN+ljyGXCern2W93aTKWdj4dbNvwb4d/CvkacGkglckJrX4rZxYXpNfZRiHIZvr3Ed2q2SHvR9PCyHSw7q/m1fohCP1w4wNfJmA09jlUVCmhfzaGWggyXUIDe/vwAi1j8YMG1MGfuMLDkeotql6D09euBHGtQ7Hxh3rQ08OorkEmkhCReI8n47/y5ZCSSSdaysd/z6/i3AjfsvJozGap/gL8eqhP5o491uT9dtzc335xfM/eYyZd0KZa8rGx9zmQYDbA/izqHxJ+I+ubb26ubDx+uP1x+/O7T9yzEKfxZ/7ww7fY+DlXZ/opKfrh9f2kWknZze6WRoO4ia1Nr5RNQFRr6Y5Ds3F706mD9m6s7kpUUc1No4RORF01vBpTvfrKPS88+X5JMS5TLTLh9T0ZBNLxK/np72bfUr1ckUOYFW7ObJLVFQHfoZ58Hzcqf3xIiIrrmxBo3EjR5H/wLOft5cMGdn5WosDe+yTRtNPBIsfz1l/uK1j8RVQg8MImmjQiiyVHyy/1+/Px7kuPFGxNo2Yjglx7gapjJ3F+vSYPfEL6/8IyAe4C/kctfhyr++S7AQ7u5EWJNSMR9O1z561Mp9XnxGCHRqy7fDHnDb6qbM/QPKjVB+l5PIpHI15J9PlZlkPLbsBVefiSreE9oQKFY5WGtfAJg0B5fgcFPcdUu1uKuokh2Loau8jPx3uMw1HjqMW19FFAH437GLemL0ZK/Z+TKDWOWXAw/jXRxJiKbfgF4AcWbmMgo2SdHA60qqGmwQvNdJXiIkhxeSVkM/ncRqa/af55HgjEae2SjH4QyNZAGyxBNUI+5gMI/I3ffDF+pcitCddvgVAnh9SaNT8LYqNQK4BgOFU39J4PX/0jWPj6g2ltRcdzms0gLCbIewb5loLUdCZJdDGk8QkB1jQ7EQ7AqaX94QLXv3eRHLvoeeKhQUSCYH2huR4JcN0M+JsgYvdEjDM2bh0zIX2jC1PTYkio1STBLaXAEJAbChiFjA9pbFSV8QnsfYEoJOa2LOEG1Xo+muAQrtKRivMusW3K8FrVHS6UUVWnoJMOTBzHc4UPKLoZB2iXBJDiO8YoxY8cQkywZIUWPYPjxIQwvpAwtLh+iVd4H06pU0QKqzDhhy7AMn3j4d+eE5t5cP6DWK42s9FgaCJ5SRBL0C4Jjz3aUbSnWeIsgBuBSTpDDmwfU+omQf8BtaeNSuExlH2xxggVU27HHNQlbhivwUYCW2N8oXmgS7acH1PpPkbsygs+CfMsIhrF3B9EKjD89XrBlyNOdfpwsw6jtX+DFh4Z2hUYFRC+AA0YuQVBRnWBiQC2jgj1D/s1p0CGIvF9Tr/J++Id73vwgst8y31Y1JEh1CbIfoTRqNnZo2DJs4Wd+6Ik+0dYfhg/bPt8JZ5ExfYdFRXkfnExm3NYjiu+Ogjn1io4I5mM41K9kvMvfV6WKNqQEc/x7u4cxY0LcliH/8kpRFHhNw8rN+ZA1/nSm/Bsr4UEDT9p4kWkYHWyBEyyOh1AParYM0SUyOxQg+lDPfU++W0J7TwifL8VhWIRXWAx0E5xcttFeiBH8DGyFyEhEyc1wLvFWk+EuRjQpo06v7INJnf9EYBd9S2vaBPvAw5PEHRk4KyNx83dF/GiopCYVqaEERR+kk8tEiXmXHuAAfBV+d4+U6v3TFkxHb4mcKMVBpmlxUTlgGBnbwfHYELZliDmWGo76+QUW6Jy/v68u5T+qW9YH771dteZkHOgdMykrPLYUoScGUVsXdcX979XgmpRfzqSOcnOctdaZlQQnPQ1u6/ZLBBhC4CazOT6i3Hw7qB7t57pC5KopHBtae0AsHeUEx5+f6YbdUjyIQgo88AKfDcuEmK24/NR/hu36VlXI78TdOLxUrDV6eC5cLA6bKAJpO4rF6CJXJ+xZMJ3EKGr/6+M03N/9xMNYvjYKO1pXxOTj8U3VvoLxojutqIOP0nU1hs715rPdaPjjL9cKcetayZ1B3lqZVwH3OBWCTIrdispnDcUY1jC3Tda93Be3N1bXeHbx+ZwoJNjSy/GIwVrpIhq1CUWjNqh0UeSKKwaxVeO6j9wp7stvby8+aNAl3Wc3V7dXTH5E/YvUUClCq5ImUKaTC2V60e00SiaKAdP1Mm/k2cuT9//89O3VKX/aK7Bq8JMxZ8ikDc0I8cTpymT9YDeUrpxG2UTR4tjSq6iEyt3dnbi1YHU4PObjvbDEGK4s5nKgBpP3Et1Qs6Y4fLHFo2bM2nQnA+JVXwY9nhIO+iutrk8xv8RD0jj7LF5Elc/OxqLTcC6fqCZWPUxKapqrGQ7k7AN0e/iNG8rIrVVu5mdyqZtaahpS7LPC22ZVNA4ueY4rlabZ8GyIzh7RYlOXon2AbgfI0/NkW6iVmvUFGUqKOxEY62UHsTIBPAUn2EzPw5qaFHeFEL3ZZwN6oEp5x9KTyIc+HSE+eCJ983JdADODRrgSn0KE/ShwiiAO+zkAK8DMoBltlOdDgoAQDnpgnsZ2CGJFRoyZGsX5IcjGsRCdlMgwegq0oOcmivOiohwhsKPQ5Pv0FMYi8DMkUvNFkEnRL/T0HnsKrrA0jwSZFH08AxgZSBAGt6zTJkLzR5BJ0cM7mX8AwRLBn2BxLgkyKYbjOGVrn0BGgBqX6WpzPgkSJabGYVgU6EsQiK3SfLPPgr3ZhxILlGDpRL9xFPj6JM3GppeIeTKijCLEZH1cBoz7aaExxwSZgsaiJRjI2iaQIXfcKPjnmiAbEseiMcV+qAhjplrQP7d9UCLQVIBD71xOixH3JuddggC1GYChYs9cDjiKsH/ci9QmgnBMgcREyUoQqX0ZBGHTAfxrIYjr73xzSFCxXS7BKZq7InRC4pt+undk8OKshKkrggd5KMHIdPP794BT1AdSMI/xUIKKen+ZaSICFGVXhCFTYa4eih0GEaDFuyIkxL3TnDMbEyLACbsi8x3ROd0nYjAiEGjHuZWJTLsx4wH4/Qjmwmd55uXJ6Pdc5gzA30ynm9lHTQy5Yae9Ubdn1Ig8ZYcODTbzmvEddqLSVz9qheA8MMSplnKs9LgFdPPAsCUikcf56TlgiEu8Hr/K2pahNlNnrWCaxXLF7e6Vic01dx14WBm61w7hjMcN0wkIilbv4RtIBjPdD68HdFMeHeVsf2Axj9nAPAMPl90nL6DNW21TqbXjI9hLdtnU0p112BFxaV9zmxge7uKOihtwrtCBuLSFe7QekPqL3Wfr/Fq2zA0bT+PkyivlLM7BpSHpE26U2KvYyCI/8+Acn8Jt65uObkg+irEd+4m8zzhYZ89gaDkwCYu6d/WNQDdd4tQA81fC5BRE7DEx9iobCeZRrW03fx0kHzbNjRQUzQcA7ncT5ECGW+Yrxz23usQpOmkbhjpMCwZHNGlsZpiS5wMcbfPGPsci6/h6d5sfE4eHU4oDyra3j0wM+Y+zvnmAFzumW5eXnxkMcfVXPhkprIonGwXDuJFYLvMIZETPmIRV/sSKqoYDQgxAwo2aCWcz7WDTNJ0X3LShc2gbDGHPz+co9mOhABr+XPjY95rOcFUXT4B3fI+UZlis8FTFtZFlW72GLdV0KRHyQghx2aXvP4rNbItiHdM1YLhm0muQIuuHHdOlNckQFgFYnnFCNihNvi4AxyYVOsINwrx6tSiRI2JqksZbK8/ZAhGvC8HJ27cFQ6CzJa5t8tfbRsclZFcw5DSajUVfxsSQv4zr8s1R+bTVaBmecAYIBVrONAz+ySe3N3kr4d+2vL0tGIKshYdAfX7OT7jUnU5HWhrDmJQKkiFf0olrbLnqwjqx0hgYHphaicJb49siS4Zt3sqOWTZmhvJ4DsEQuushsd5LzNtmYl7OQ/XV1eNn2DEJx22SodwjQmgiuMANYromtVSeqQa6cMyVWj8Y+MD4POBrFMU8gDJhhmgtRRZCdrZnJrlucDmtmeV6ZLY0IlYTdhicxS4xlTOfKhdF356bMEOU27rxEixHxxBiR5KA/xv8ln2Lt0ClrG+IH6rtMqzUgbSlRJ9UDHE1nShD3t6tNUVrH8n28v3JOxrZwQ9RO5fR0e3VNRGImjz+0S6PDIxbIZrV+A8BDFmgX0TfUJiGDLkB1cEjL0sgx6XZc6pOd9R2xNW101UMGPLQJRQrTqUfWo91kt5t2XSt3VNsY0kyNBcUPdcUiz8TDE1Po3A642cYMTMkbr1RRgJNH29s6BvvaHK8sUt0GTLiy3qoLdzqiXy/DD8Kqrgp0vbL9yLISclryLA1KoYBv89nnknROutb28ttS5nDg+2t445lYyFWbHdrmWlje2/PfLaoW2sjTWFW3Z3tF8+fHdSJe3NvU1TqqRTTNB7K8jFwhH2/2Ey55vP5eaQTZhdnefYDzNT+/cXmGHumXvzlwBy1tV0mV//FADzDc/F63TA1XxB2DAuKtnfvnvJzCAxvFvY74ji52U4SPwqaJXxp33/D/GHHFMvN7OnbT4MiI5jj2T8k79GoH+61Z/2QQwdzjIAvkehznEiN79cIx475/HbLEbzmVV7JfDVvv+IkwJ9uTvqxvrDfdhtI37geEa5R2oj12Y8qxZOYlJbj8ZLdkrWaaXouRkONuP2T6BG+7USWz6ev2k9NjOshdi9+XYBvNCJH/PxflIinXowzHLrXzOQMhglc75C3zDrI4mHJEFfytyxfFpVF02NimOBt9NRwZqHMWplLY6IoWaKhFSvDZByXAQealFYUTPE2dIaK2KAzESbhlP54XkjFNGlVMCwW85D8BtVgH6bC+HRRKYip7lh6TMv+yvoeI1laCMco7K2r+mmQ0IaaFRtV04rP7/fBlrSqh5EvliMZGmNtzCSNSeQM1bsgbYZhz54GTXpXyoxDwVsWDMt+Nn5PJJoJdnPSmyqxcb5HZfTDdFVNjOu0D/i1I5S24gTnfGhuEaYNQtUcJDjEI7ytNOuGIdZW9roRUkEdmXpCi3w6wwKoJ+RifEGgw8qCInhpeCUBuQnOMB6gXkIzoQR+yCoKwe9L/VjzuBimYmBNPVXWohp+TQUeLU+EfJAtiVm0NAGTxdlSEJrjpUm+r6OsJ4JvPTXq91AknMF+SQtgQFTBsESK2SQlqUWCq/ppLg6qnVpdhZrLY+qHfm4aWLP4hl61BO4QW0ErKZ6QFFYuC4+GJlbCcEeQqiAGky1txUTZAhX15VBM5UXDlpaIv1xNgImGD6M0ica6lMWaW+NaIR6ntajqYx0qQVVmbNQC+/Ik9USZ0gZlP+TfHWGyjLDLwCUVJ7G4QoqMjY93wBytZEimwcoyxY+yMqEyLD1F61rRGQZgiRnjFYtHmU6zvh9hmp7xsl/LM7ZTdxRcAFsNwD7wOGMpJmthVlrsFSD3MYbHKit8J7J4mESLlK5Q1mbRsgLMAqY9fA4wFCUqvE/iThornGGeEvxNmHXDE6GCfJsNv9g8dIyr/CPCDIZ5VBHNcB+V6VkxqojFMBHu9Lz4zwiIAhmxMF389/J6w7br8cP8Q1V+5+ObP25EJ3dGhQMHDhw4cODAgQMHDhw4cODAgQMHDhw4cODAgQMHDhw4cODAgQMHDuzwfwjqfvZOI5Q2AAAAAElFTkSuQmCC"
          />
        </Link>
      </div>
      <div>
        <ul className="flex justify-evenly my-2">
          <Link to={"/"}>
            <li className="p-1 m-3">Home</li>
          </Link>

          <Link to={"/about"}>
            <li className="p-1 m-3">About</li>
          </Link>
          <Link to={"/contact"}>
            <li className="p-1 m-3">Contact Us</li>
          </Link>
          <Link to={"/instamart"}>
            <li className="p-1 m-3">Instamart</li>
          </Link>
          <li className="p-1 m-3">Cart</li>
          <li className="p-1 m-3 cursor-pointer" onClick={toggleLogin}>
            {isLoggedIn ? "Logout" : "Login"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

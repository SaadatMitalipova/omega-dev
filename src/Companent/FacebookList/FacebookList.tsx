import facebook from "../FacebookList/facebook.png";

export const FacebookList = ({ data }: { data: any }) => {
  return (
    <>
      <section data-v-a2ede7f6 className="block facebook">
        <section data-v-a2ede7f6 className="block devkg">
          <h4 data-v-a2ede7f6 className="title">
            Facebook
          </h4>
          {data &&
            data.map((item: any, index: number) => (
              <a key={index} data-v-a2ede7f6 href={item.value} className="item">
                <img
                  className="icon icon-devkg"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAbFBMVEVHWpb///9LXphCVpRFWJU8UpJRYptwfaqss8s0S485T5HAxdjY2uagqMQ6UJG9wtaBjLMvR43n6fCRm7z5+vzw8fVqeKdzgKtmdKWXoL/e4OqKlLhaap/Lz97z9Peor8l8h7C0utAmQYrS1uPdiXDzAAADAUlEQVR4nO3d61LqMBhG4UJaNZVWw0lOouj93+PWP86u/aBO0EDeWes3LXlkhJKWphgX6o0LjAph1AijRhg1wqgRRo0waoRRI4waYdQIo0YYNcKoEUaNMGqEUSOMGmHUCKNGGDXCqBFGjTBqhHGwMlkXMlbeV6lqg3fpjWVYT0cJ22xD5IsZbSxdUuFnkzoOGW30i9TEj5cyJDW2d+mJo9Es6n8y1ujnlzBOfUJjubsEcTSqExrd7WWMNzHvOhgxYsSIESNGjBgTGOf7/f70sX7OxunDbOl8+MgH79tit3ycNc9Cxv3LTair/0ZfFqVzrn6VMS62oTVH7h5VjE049t1exbjftcefQ8M4bU9M0GgYp/7UkCWMc3dyxBLG5emZRAXjYWAiUcE4NLMvYGyqoefI32gf3EgZnwenvPM3vg6ensnfaL+pfnzf+Dp1nP33jo1ldL59mjVfPWRuPBjH4vVyMrRZVkbjbKl/Gd4sK+Ntz2i9xeRt7A82/OQCg6yM1ffBlqu4P80VG3tHANVaztj76KgO+sbW+DRUM9b3GDFixIgRI0aMGK/UuJh02vSmOqqXTfchk/fcjA9vdaf+LqvuA2r/lp3x+PniI5mXc4sZnTG9qmY0JwbEjO1B31gbl1mpGb31ey4xY7CuDtQylpW1Gy2jM+eUxYzm6Q8tY9XoG+05ZS1jbX3tEDOaH49ixmDu5rqNoft7f2OX324IkJ9xsm46GafKuw+wf9N91cbvKc7nYMSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYsSIESNGjBgxYkxiLJeXMcaMNdpoXiX858Z51OIW0es+DN4G5i+M9ynXRPjh7TV+2ziOWogleh2Wdpbe+Dp0u7ZfNhbt0zmrzUQYp6s44hnGwoXb5i623nDd9vQGzSp2WaRzjJ+XnLaRWdevDmwRv4oXa7FphFEjjBph1AijRhg1wqgRRo0waoRRI4waYdQIo0YYNcKoEUaNMGqEUSOMGmHUCKNGGDXCqBFGjTBqhFGj8T/YvV4q+kcQAwAAAABJRU5ErkJggg=="
                  alt=""
                />
                {item.label}
              </a>
            ))}
        </section>
      </section>
    </>
  );
};

import { Button } from "./Button";

interface PaginationProps {
  activeIndex: number;
  pages: number;
  onClickPreviousButton: () => void;
  onClickNextButton: () => void;
}

export function Pagination(props: PaginationProps) {
  return (
    <nav>
      {props.pages >= 1 && (
        <ul className="flex flex-row items-center justify-center gap-4 mt-4">
          <Button
            label="Anterior"
            onClick={props.onClickPreviousButton}
            disabled={props.activeIndex === 1}
          />
          <p>
            {props.activeIndex}/{props.pages}
          </p>
          <Button
            label="Próxima"
            onClick={props.onClickNextButton}
            disabled={props.activeIndex === props.pages}
          />
        </ul>
      )}
    </nav>
  );
}
